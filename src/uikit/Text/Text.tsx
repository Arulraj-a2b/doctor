import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./text.module.css";
import {
  textColorsType,
  textAlignType,
  textTransform,
} from "./textTypes";

const defaultProps = {
  tag: "span",
  color: "primary",
};

type Props = {
  tag: any;
  children: ReactNode;
  className?: string;
  size?: number;
  color?: textColorsType;
  bold?: boolean;
  align?: textAlignType;
  transform?: textTransform;
  fontWeight?: string;
  lineHeight?: number;
  width?: string | number;
} & typeof defaultProps;

const cx = classNames.bind(styles);

const Text = ({
  tag: Element,
  children,
  className,
  size,
  color,
  bold,
  align,
  transform,
  fontWeight,
  lineHeight,
  width,
}: Props) => {
  const textClassName = cx(
    {
      [`color-${color}`]: color,
      bold,
      [`text-${align}`]: align,
      [`transform-${transform}`]: transform,
    },
    className,
    styles.common
  );
  return (
    <Element
      style={{
        fontSize: size,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        width: width,
      }}
      className={textClassName} 
    >
      {children}
    </Element>
  );
};

Text.defaultProps = defaultProps;

export default Text;
