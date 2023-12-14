import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
