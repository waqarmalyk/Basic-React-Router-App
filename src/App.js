import { Routes, Route } from "react-router-dom";
import AllPlaces from "./pages/AllPlaces";
import FavoritePlace from "./pages/FavoritePlace";
import SinglePlace from "./pages/SinglePlace";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllPlaces />} />
        <Route path="/single-place" element={<SinglePlace />} />
        <Route path="/favorite-place" element={<FavoritePlace />} />
      </Routes>
    </>
  );
}

export default App;
