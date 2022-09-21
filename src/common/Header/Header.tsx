import SvgBell from "../../icons/SvgBell";
import SvgHambar from "../../icons/SvgHambar";
import SvgLogo from "../../icons/SvgLogo";
import Flex from "../../uikit/Flex/Flex";
import styles from './header.module.css';

const Header = () => {
  return (
    <Flex row between className={styles.overAll}>
      <SvgLogo />
      <Flex row>
        <SvgBell />
        <SvgHambar className={styles.svgHambar}/>
      </Flex>
    </Flex>
  );
};

export default Header;
