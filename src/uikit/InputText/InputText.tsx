import classNames from "classnames/bind";
import { CSSProperties, useState } from "react";
import { isEmpty } from "../../utils/validators";
import Flex from "../Flex/Flex";
import LabelWrapper from "../LabelWrapper/LabelWrapper";
import Text from "../Text/Text";
import { textColorsType } from "../Text/textTypes";
import styles from "./inputtext.module.css";
import { keyBoardProps } from "./inputTextTypes";

const cx = classNames.bind(styles);
type Props = {
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  name?: string;
  label?: string;
  labelBold?: boolean;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (a: any) => void;
  maxLength?: number;
  minLength?: number;
  onKeyPress?: (a: any) => void;
  keyboardType?: keyBoardProps;
  style?: CSSProperties;
  actionRight?: Function;
  labelColor?: textColorsType;
  autoFocus?: boolean;
  actionLeft?: Function;
  floatingLabel?: boolean;
};

const InputText = ({
  placeholder,
  autoComplete,
  className,
  name,
  label,
  required,
  labelBold,
  value,
  disabled,
  keyboardType,
  onChange,
  onKeyPress,
  maxLength,
  minLength,
  style,
  actionRight,
  labelColor,
  autoFocus,
  actionLeft,
  floatingLabel,
}: Props) => {
  const [isFlotStyle, setFlotStyle] = useState(false);

  const inputClassName = cx(className, styles.common);

  const checkLabel = floatingLabel ? "" : label;

  const handleFocus = () => {
    setFlotStyle(true);
  };

  const handleBlur = (e: any) => {
    if (isEmpty(e.target.value)) {
      setFlotStyle(false);
    }
  };

  return (
    <LabelWrapper
      label={checkLabel}
      bold={labelBold}
      required={required}
      labelColor={labelColor}
    >
      <div className={cx("inputDiv", inputClassName)}>
        {typeof actionLeft === "function" && (
          <div className={styles.actionLeftStyle}>{actionLeft()}</div>
        )}
        <input
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          onKeyPress={onKeyPress}
          disabled={disabled}
          type={keyboardType}
          onChange={onChange}
          autoComplete={autoComplete}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={styles.inputStyle}
          style={style}
        />

        {floatingLabel && (
          <Flex
            row
            className={cx("floatStyle", {
              floatingLabel: !isFlotStyle,
              floatingFocusLabel: isFlotStyle,
            })}
          >
            <Text color={labelColor}>{label}</Text>
            {required && (
              <Text className={styles.requiredStyle} color={labelColor}>
                *
              </Text>
            )}
          </Flex>
        )}

        {typeof actionRight === "function" && (
          <div className={styles.actionRightStyle}>{actionRight()}</div>
        )}
      </div>
    </LabelWrapper>
  );
};

export default InputText;
