import { Navigate, Route, Routes } from "react-router-dom";
import BookTour from "../pages/BookTour";
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
          <Route path="profile" element={<Profile />} />
          <Route path="book-tour/:id" element={<BookTour />} />
          <Route path="my-booked" element={<Tour />} />
          <Route path="tour/:id" element={<TourDetail />} />
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
