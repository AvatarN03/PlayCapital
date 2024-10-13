import { lazy, Suspense, useContext } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import UserContextProvider, { userContext } from './context/userContext';

import Authorization from './components/Authorization/Authorization';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import { Footer } from './components/Footer/Footer';
import About from './components/About/About';
import ViewPost from './components/Blog/ViewPost';
import Logout from './components/LogOut/Logout';
import MemoryGame from './components/MemoryGame/MemoryGame';
import IncomeBracket from './components/RuleTheBoard/IncomeBracket';
import Game3ConnectingLink from './components/RuleTheBoard/Game3ConnectingLink';
import Quiz from './components/QuizGame/Quiz';
import { CircularProgress } from '@mui/material';


// Lazy load components
const Home = lazy(() => import('./components/Home/Home'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const CreateBlog = lazy(() => import('./components/Blog/CreateBlog'));

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const NoNavFooterLayout = () => {
  return <Outlet />;
};

const NotFound = () => {
  return <h1 className='text-center text-3xl ' >404 - Page Not Found</h1>;
};

const RedirectToHTML = ({ file }) => {
  window.open(`/${file}`, '_blank');  // Redirect to the HTML file
  return null; // Return nothing since it's a redirect
};

function App() {
  return (
    <UserContextProvider>
      <MainApp />
    </UserContextProvider>
  );
}
const PrivateRoute = () => {
  const { auth } = useContext(userContext);
  return auth.user ? <Outlet /> : <Navigate replace to="/authorization" />;
};

const MainApp = () => {
  const { auth } = useContext(userContext); // Use the context here

  // Private route logic


  return (
    <>

      <Suspense fallback={
          <div className='text-7xl min-h-screen flex flex-col justify-center items-center'>
            <p>Loading ...</p>
            <div className="flex justify-center items-center gap-4">
              <CircularProgress size="3rem" color="secondary" />
              <CircularProgress color="success" />
              <CircularProgress size="3rem" color="inherit" />
            </div>
          </div>}>
        {/* The Routes are defined  */}
        <Routes>
          {/* The Routes with Header and Footer  */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
              <Route path="/blog" element={<Blog />} />

            {/* The routes inside of the header & footer and secure  */}

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/post/:id" element={<ViewPost />} />
            </Route>
          </Route>


          {/* The Routes without Header and Footer  */}
          <Route element={<PrivateRoute />}>
            <Route path="/createpost" element={<CreateBlog />} />
          </Route>

          <Route path="/logout" element={<Logout />} />
          <Route path="/authorization" element={<Authorization />} />



          {/* The game Section withour Header  */}
          <Route element={<NoNavFooterLayout />}>
            <Route path="/features/memorygame" element={<RedirectToHTML file="memory-game.html" />} />
            <Route path="/features/ruleboard" element={<IncomeBracket />} />
            <Route path="/features/quiz" element={<Quiz />} />
            <Route path="/gameconnect" element={<Game3ConnectingLink />} />

            {/* Redirecting to HTML files */}
            <Route path="/gamehigh" element={<RedirectToHTML file="gamehigh.html" />} />
            <Route path="/gamelow" element={<RedirectToHTML file="gamelow.html" />} />
            <Route path="/game" element={<RedirectToHTML file="game.html" />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>

    </>
  );
};

export default App;
