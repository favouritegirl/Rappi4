import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import Feed from "../Pages/Feed/Feed";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import ProfileEdit from "../Pages/ProfileEdit/ProfileEdit";
import Restaurant from "../Pages/Restaurant/Restaurant";
import SingUp from "../Pages/SignUp/SingUp";
import SingUpAdress from "../Pages/SingUpAdress/SingUpAdress";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/singUp/adress" element={<SingUpAdress />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:restaurant" element={<Restaurant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfileEdit />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
