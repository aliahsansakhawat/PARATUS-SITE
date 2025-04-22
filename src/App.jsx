import Empower from "./Components/Empower";
import Footer from "./Components/Footer";
import Getstarted from "./Components/Getstarted";
import Lastpage from "./Components/Lastpage";
import Nav from "./Components/Nav";
import Secondpage from "./Components/Secondpage";
import Thirdpage from "./Components/Thirdpage";
import Threecards from "./Components/Threecards";
import Twocards from "./Components/Twocards";
import CriticalSection from "./Components/criticalSection";
import "./index.css";

export default function App() {
  return (
    <>
      <Nav />
      <Secondpage />
      <CriticalSection />
      <Empower />
      <Thirdpage />
      <Twocards />
      <Threecards />
      <Getstarted />
      <Lastpage />
      <Footer />
    </>
  );
}
