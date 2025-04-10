import { Navigate, Route, Routes } from "react-router-dom";
import BookTour from "../pages/BookTour";
import Booked from "../pages/MyBooked";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Tour from "../pages/Tour";
import TourDetail from "../pages/TourDetail";
import PrivateRoutes from "./privateRouter";
import PublicRouter from "./publicRouter";

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route element={<PrivateRoutes />}>
          <Route index element={<Tour />} />
          <Route path="tour" element={<Tour />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tour/:id/book" element={<BookTour />} />
          <Route path="tour/:id" element={<TourDetail />} />
          <Route path="booked" element={<Booked />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default RouterApp;
