import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard";
import Applied from "./views/Applied";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100%",
          display: "flex",
          fontFamily: "Poppins",
          fontSize: "15px",
          justifyContent: "flex-end",
        }}
      >
        <Sidebar />
        <div
          style={{
            width: "80%",
            background: "#F8F8F8",
            minHeight: "100vh",
            boxSizing: "border-box",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applied" exact element={<Applied />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
