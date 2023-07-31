import Calc from "./Item/Calculator";
import { Routes, Route, Router } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>

      <Routes>
        <Route exact path="/" element={<Calc />} />
      </Routes>
    </div>
  );
};

export default About;
