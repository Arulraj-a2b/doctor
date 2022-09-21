import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import styles from "./doctorofthemonth.module.css";
import profileImage from "../../image/doctor-profile.png";
import { doctorRatingData } from "./mock";

const DoctorOfTheMonth = () => {
  return (
    <Flex className={styles.overAll}>
      <Text size={20} color="theme" bold>
        Doctor of the month
      </Text>
      <Flex className={styles.borderStyle}>
        <Flex row>
          <img src={profileImage} className={styles.profile} alt="logo" />
          <Flex>
            <Text bold size={20} color="theme">
              Dr. John Gibbs
            </Text>
            <Text bold size={12}>
              BDS, MDS{" "}
            </Text>
            <Text bold size={12}>
              Dental Surgeon
            </Text>
          </Flex>
        </Flex>
        <Flex row between className={styles.listContainer}>
          {doctorRatingData.map((list, index) => {
            return (
              <Flex center key={index.toString()}>
                {list.icon()}
                <Text className={styles.listValue} size={10} color="theme" bold>
                  {list.value}
                </Text>
                <Text size={8} bold>
                  {list.name}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DoctorOfTheMonth;
