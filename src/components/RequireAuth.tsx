import { fakeAuthProvider } from "../utils/auth"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export const RequireAuth = ({ allowedRole }: { allowedRole: string }) => {
  const { isAuthenticated, roles } = fakeAuthProvider
  const location = useLocation()

  return isAuthenticated && roles.find((role) => role === allowedRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
