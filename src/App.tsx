import BottomTab from "./common/BottomTab/BottomTab";
import HomeScreen from "./modules/Home/HomeScreen";
import MediaContainer from "./uikit/MediaContainer/MediaContainer";

function App() {
  return (
    <MediaContainer>
      <>
        <HomeScreen />
        <BottomTab />
      </>
    </MediaContainer>
  );
}

export default App;
