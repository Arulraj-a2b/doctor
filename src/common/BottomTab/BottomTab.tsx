import Flex from "../../uikit/Flex/Flex";
import { data } from "./mock";
import styles from "./bottomtab.module.css";
import classNames from "classnames/bind";
import Text from "../../uikit/Text/Text";
import { isEmpty } from "../../utils/validators";

const cx = classNames.bind(styles);

const BottomTab = () => {
  return (
    <Flex center row between className={styles.overAll}>
      {data.map((list, index) => {
        return (
          <Flex key={index.toString()}>
            <Flex row center className={cx({ focus: index === 0 })}>
              {list.icon()}
              {!isEmpty(list.title) && (
                <Text bold className={cx("title")}>
                  {list.title}
                </Text>
              )}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BottomTab;
