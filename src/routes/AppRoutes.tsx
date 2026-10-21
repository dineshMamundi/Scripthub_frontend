import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "../pages/auth/VeryfyOtpPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import ProfilePage from "../pages/profile/ProfilePage";

import BrowseScriptsPage from "../pages/producer/BrowseScriptsPage";
import InterestedScriptsPage from "../pages/producer/InterestedScriptsPage";
import ProducerDashboardPage from "../pages/producer/ProducerDashboardPage";

import AllScriptsPage from "../pages/scripts/AllScriptsPage";
import MyScriptsPage from "../pages/scripts/MyScriptsPage";
import AddScriptPage from "../pages/scripts/AddScriptPage";
import ScriptViewPage from "../pages/scripts/ScriptViewPage";
import EditScriptPage from "../pages/scripts/EditScriptPage";

import ReportsPage from "../pages/admin/ReportsPage";
import ScriptsPage from "../pages/admin/ScriptsPage";
import UsersPage from "../pages/admin/UsersPage";

import RoleProtectedRoute from "./RoleProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />

      <Route
        path="/dashboard"
        element={
          <RoleProtectedRoute>
            <DashboardPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <RoleProtectedRoute>
            <ProfilePage />
          </RoleProtectedRoute>
        }
      />

      {/* Director Routes */}
      <Route
        path="/scripts"
        element={
          <RoleProtectedRoute allowedRoles={["director"]}>
            <AllScriptsPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/scripts/my"
        element={
          <RoleProtectedRoute allowedRoles={["director"]}>
            <MyScriptsPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/scripts/add"
        element={
          <RoleProtectedRoute allowedRoles={["director"]}>
            <AddScriptPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/scripts/:id"
        element={
          <RoleProtectedRoute allowedRoles={["director", "producer"]}>
            <ScriptViewPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/scripts/edit/:id"
        element={
          <RoleProtectedRoute allowedRoles={["director"]}>
            <EditScriptPage />
          </RoleProtectedRoute>
        }
      />

      {/* Producer Routes */}
      <Route
        path="/producer/dashboard"
        element={
          <RoleProtectedRoute allowedRoles={["producer"]}>
            <ProducerDashboardPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/producer/browse"
        element={
          <RoleProtectedRoute allowedRoles={["producer"]}>
            <BrowseScriptsPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/producer/interested"
        element={
          <RoleProtectedRoute allowedRoles={["producer"]}>
            <InterestedScriptsPage />
          </RoleProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/users"
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <UsersPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/admin/scripts"
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <ScriptsPage />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <ReportsPage />
          </RoleProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
