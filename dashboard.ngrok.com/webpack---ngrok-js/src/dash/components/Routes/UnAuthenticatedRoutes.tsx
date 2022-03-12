import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { UnauthRoutes } from 'nlib/routes/dash';

import { LoginPage } from 'pages/login';
import { PasswordChangePage } from 'pages/password/change';
import { PasswordResetPage } from 'pages/password/reset';
import { SignupPage } from 'pages/signup/index';
import { ConfirmOauthSignupPage } from 'pages/signup/oauth/confirm';

export function UnAuthenticatedRoutes() {
  return (
    <Routes>
      <Route path={UnauthRoutes.Login} element={<LoginPage />} />
      <Route
        path={UnauthRoutes.ConfirmOauthSignup}
        element={<ConfirmOauthSignupPage />}
      />
      <Route path={UnauthRoutes.Signup} element={<SignupPage />} />
      <Route
        path={UnauthRoutes.PasswordReset}
        element={<PasswordResetPage />}
      />
      <Route
        path={UnauthRoutes.PasswordChange}
        element={<PasswordChangePage />}
      />
      <Route path="*" element={<Navigate replace to={UnauthRoutes.Login} />} />
    </Routes>
  );
}
