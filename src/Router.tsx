import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default Router;
