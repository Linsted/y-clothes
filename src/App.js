import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
