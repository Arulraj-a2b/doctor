import Header from "../../common/Header/Header";
import SvgSearch from "../../icons/SvgSearch";
import SvgSlide from "../../icons/SvgSlide";
import SvgTheme from "../../icons/SvgTheme";
import Flex from "../../uikit/Flex/Flex";
import InputText from "../../uikit/InputText/InputText";
import DoctorOfTheMonth from "./DoctorOfTheMonths";
import styles from "./homescreen.module.css";
import Profile from "./Profile";
import Ratings from "./Ratings";
import TopDoctors from "./TopDoctors";

const HomeScreen = () => {
  return (
    <Flex className={styles.overAll}>
      <Header />
      <Profile />
      <div className={styles.inputSearch}>
        <InputText
          placeholder="Search Doctor"
          actionRight={() => <SvgSearch className={styles.svgSearch} />}
        />
      </div>
      <TopDoctors />
      <DoctorOfTheMonth />
      <Ratings />
      <Flex center className={styles.svgSlide}>
        <SvgSlide />
      </Flex>
      <div className={styles.svgTheme}>
        <SvgTheme/>
      </div>
    </Flex>
  );
};

export default HomeScreen;
