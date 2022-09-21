import { memo } from "react";
import classNames from "classnames/bind";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import { textColorsType } from "../Text/textTypes";
import styles from "./labelwarpper.module.css";
import { isEmpty } from "../../utils/validators";

const cx = classNames.bind(styles);
type Props = {
  required?: boolean;
  children?: import("react").ReactNode;
  label?: string;
  bold?: boolean;
  labelColor?: textColorsType;
};

const LabelWrapper = ({
  required,
  children,
  label,
  bold,
  labelColor,
}: Props) => {
  return !isEmpty(label) ? (
    <Flex className={cx("overAll")}>
      <Flex row className={cx("labelConatiner")}>
        <Text color={labelColor} className={cx("labelText")} bold={bold}>
          {label}
        </Text>
        {required && <Text color={labelColor}>*</Text>}
      </Flex>
      {children}
    </Flex>
  ) : (
    <>{children}</>
  );
};

export default memo(
  LabelWrapper,
  (prevProps: Props, nextProps: Props) =>
    prevProps.children === nextProps.children
);
