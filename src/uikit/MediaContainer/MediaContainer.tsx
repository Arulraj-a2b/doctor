import Flex from "../Flex/Flex";
import styles from './mediacontainer.module.css'

type Props = {
  children: import("react").ReactChild;
};

const MediaContainer = ({ children }: Props) => (
  <Flex flex={1} middle row className={styles.overAll}>
    <Flex flex={1} className={styles.innerContainer}>{children}</Flex>
  </Flex>
);

export default MediaContainer;
