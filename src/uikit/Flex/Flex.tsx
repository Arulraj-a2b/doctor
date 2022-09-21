import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './flex.module.css';

const cx = classNames.bind(styles);
const defaultProps = {
  column: true,
};

type Props = {
  children: ReactNode;
  between?: boolean;
  around?: boolean;
  evenly?: boolean;
  center?: boolean;
  start?: boolean;
  end?: boolean;
  middle?: boolean;
  top?: boolean;
  bottom?: boolean;
  row?: boolean;
  rowReverse?: boolean;
  columnReverse?: boolean;
  column?: boolean;
  flex?: number;
  wrapReverse?: boolean;
  wrap?: boolean;
  className?: string;
  height?: number | string;
  backgroundImage?:any
} & typeof defaultProps;

const Flex = ({
  children,
  className,
  between,
  column,
  around,
  evenly,
  flex,
  row,
  center,
  start,
  end,
  middle,
  top,
  bottom,
  rowReverse,
  columnReverse,
  wrap,
  wrapReverse,
  height,
  backgroundImage
}: Props) => {
  const flexClassName = cx(
    {
      ['between']: between,
      ['column']: column && !row,
      ['around']: around,
      ['evenly']: evenly,
      ['center']: center,
      ['start']: start,
      ['end']: end,
      ['middle']: middle,
      ['top']: top,
      ['bottom']: bottom,
      ['rowReverse']: rowReverse,
      ['columnReverse']: columnReverse,
      ['wrap']: wrap,
      ['wrapReverse']: wrapReverse,
      ['row']: row,
    },
    className,
  );

  return (
    <div style={{ flex, height,backgroundImage }} className={flexClassName}>
      {children}
    </div>
  );
};

Flex.defaultProps = defaultProps;

export default Flex;
