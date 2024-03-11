import { Suspense } from "react";
import Loader from "../components/loader";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/routes/protected-route";
import PublicRoute from "../components/routes/public-routes";
import DashboardHome from "./dashboard/home";
import Transaction from "./dashboard/transactions";
import Register from "./auth/register";
import Login from "./auth/login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="*" element={<Navigate replace to="/dashboard" /> } />
      </Route>

      <Route path="/" element={<PublicRoute />}>
      <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<Navigate replace to="/sign-in" /> } />
      </Route>
    </Routes>
  );
};

const View = () => {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <AllRoutes />
    </Suspense>
  );
};

export default View;
