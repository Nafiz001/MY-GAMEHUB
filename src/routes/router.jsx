import { createBrowserRouter } from 'react-router-dom';

export const gamesLoader = async () => {
  const res = await fetch('/games.json');
  if (!res.ok) throw new Error('Failed to load games');
  return res.json();
};

export const gameDetailsLoader = async ({ params }) => {
  const res = await fetch('/games.json');
  if (!res.ok) throw new Error('Failed to load games');
  const games = await res.json();
  const game = games.find((g) => g.id === params.id);
  if (!game) throw new Response('Game Not Found', { status: 404 });
  return game;
};
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import GameDetails from '../pages/GameDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyProfile from '../pages/MyProfile';
import UpdateProfile from '../pages/UpdateProfile';
import ForgotPassword from '../pages/ForgotPassword';
import Developers from '../pages/Developers';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: gamesLoader,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/browse',
    element: <Browse />,
    loader: gamesLoader,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/developers',
    element: <Developers />,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/about',
    element: <About />,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/contact',
    element: <Contact />,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/game/:id',
    element: (
      <ProtectedRoute>
        <GameDetails />
      </ProtectedRoute>
    ),
    loader: gameDetailsLoader,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/login',
    element: <Login />,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/register',
    element: <Register />,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <MyProfile />
      </ProtectedRoute>
    ),
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '/update-profile',
    element: (
      <ProtectedRoute>
        <UpdateProfile />
      </ProtectedRoute>
    ),
    hydrateFallbackElement: <div className="min-h-screen flex items-center justify-center"><div className="loading loading-spinner loading-lg"></div></div>,
  },
  {
    path: '*',
    element: <NotFound />,
    
  },
]);

export default router;