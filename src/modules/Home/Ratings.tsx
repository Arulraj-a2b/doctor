import SvgEllipse from "../../icons/SvgEllipse";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import { ratingData } from "./mock";
import styles from "./ratings.module.css";

const Ratings = () => {
  return (
    <Flex className={styles.overAll}>
      <Text size={20} bold>
        Ratings
      </Text>
      <Flex>
        {ratingData.map((list, index) => {
          return (
            <Flex
              between
              row
              center
              key={index.toString()}
              className={styles.listFlex}
            >
              <Flex row center>
                <img
                  alt="logo"
                  src={list.icon}
                  className={styles.listImageHeight}
                />
                <Flex>
                  <Text size={16} color="white" bold>
                    {list.value}
                  </Text>
                  <Text size={10} bold className={styles.listName}>
                    {list.name}
                  </Text>
                </Flex>
              </Flex>
              <SvgEllipse />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Ratings;
