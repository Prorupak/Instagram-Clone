import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ReactLoader } from './common';
import * as ROUTES from '../constants/routes';
import {UserContext} from './contexts';
import { useFirebaseAuth } from "../hooks"
import { ProtectedRoutes } from './routes';

const Login = lazy(() => import('./user/login'));
const SignUp = lazy(() => import('./user/signUp'));
const Dashboard = lazy(() => import('./dashboard/dashboard'));
const Profile = lazy(() => import('./common/Profile/profile'));
const NotFound = lazy(() => import('./common/notFoundPage/notFound'));


const  App = () => {
  const { user } = useFirebaseAuth();
  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
      <Suspense fallback={<ReactLoader />}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
