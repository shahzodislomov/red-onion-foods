import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Breakfast from "./components/Breakfast";
import Dinner from "./components/Dinner";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lunch from "./components/Lunch";
import Order from "./components/Order";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
