import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/nav/Navigation";
import MainPage from "./pages/MainPage"

function App() {
  return (
    <div className="App flex w-[100%] p-6 h-[100%]">
      <Navigation />
      <Routes >
        <Route path="/" element={ <MainPage /> } />
        {/* <Route path="/backups" element={ <BackupsPage /> } />
        <Route path="/mng" element={ <ManagmentPage /> } />
        <Route path="/options" element={ <OptionsPage /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
