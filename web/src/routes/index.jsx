import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AppRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}