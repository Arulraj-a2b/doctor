import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import topDoctor from "../../image/female-doctor.png";
import styles from "./topdoctors.module.css";
import SvgRightarrow from "../../icons/SvgRightarrow";

const TopDoctors = () => {
  return (
    <Flex className={styles.overAll}>
      <Flex between>
        <Text size={20} color="white" bold>
          Explore Top Doctors
        </Text>
        <Text className={styles.reviewText}>with ratings and reviews.</Text>
        <SvgRightarrow className={styles.btnStyle}/>
      </Flex>
      <img src={topDoctor} className={styles.topDoctor} alt="logo" />
    </Flex>
  );
};

export default TopDoctors;
