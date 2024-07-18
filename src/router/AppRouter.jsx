import { AppTheme } from "../theme/AppTheme";
import { RoutesHome } from "../home/routes/RoutesHome.jsx";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutesHome />} />
      </Routes>
    </>
  );
};
