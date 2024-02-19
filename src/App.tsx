import Facts from "./components/Facts";
import Logo from "./components/Logo";
import Checker from "./components/Checker";

const App = () => {
  return (
    <div>
      <Logo />
      <div className="content">
        <Facts />
        <Checker />
      </div>
    </div>
  );
};

export default App;
