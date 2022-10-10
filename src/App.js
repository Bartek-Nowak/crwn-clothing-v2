import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component";

const Nav = () => {
  return (
    <div>
      <h1>I'm navbar</h1>
      <Outlet />
    </div>
  );
};

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
