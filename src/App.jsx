import { Outlet } from "react-router-dom";
import DefaultFooter from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4">
      <Header />
      <div className="min-h-[calc(100vh - 400px)]">
        <Outlet />
      </div>
      <DefaultFooter />
    </div>
  );
};

export default App;
