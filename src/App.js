import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/nav/Navigation";
import { config } from "./config";

function App() {
  return (
    <div className="App flex w-[100%] p-6 h-[100%]">
      <Navigation />
      <Routes >
        { Object.keys(config.menu).map(key =>  <Route path={ config.menu[key].path } element={ config.menu[key].page } key={config.menu[key].index}  />) }
      </Routes>
    </div>
  );
}

export default App;
