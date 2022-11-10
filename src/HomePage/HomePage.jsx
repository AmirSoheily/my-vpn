import Andriod from "../Components/Andriod/Andriod";
import Ios from "../Components/Ios/Ios";
import Windows from "../Components/WIndos/Windows";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <Windows></Windows>
        <Ios></Ios>
        <Andriod></Andriod>
      </div>
    </>
  );
}
export default HomePage;
