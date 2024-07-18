import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";

export const RoutesHome = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
