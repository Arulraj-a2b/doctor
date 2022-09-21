import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import styles from "./profile.module.css";
import profileImage from "../../image/profile.png";
const Profile = () => {
  return (
    <Flex row center between className={styles.overAll}>
      <Flex>
        <Text size={32} bold>
          Hello ,
        </Text>
        <Text size={32} bold color="theme">
          Charles Miller
        </Text>
      </Flex>
      <img src={profileImage} className={styles.profile} alt="logo" />
    </Flex>
  );
};

export default Profile;
