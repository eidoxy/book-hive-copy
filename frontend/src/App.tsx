import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import BooksDetail from './pages/BooksDetail';
import AllBooks from './pages/AllBooks';
import BorrowingBooks from './pages/BorrowingBooks';
import BorrowingDetails from './pages/BorrowingDetails';
import CategoryBooks from './pages/CategoryBooks';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        {/* Sign In Route*/}
        <Route path="/signin" element={<SignIn />} />
        {/* Sing Up Route */}
        <Route path="/signup" element={<SignUp />} />
        {/* Profile Route */}
        <Route path="/profile" element={<Profile />} />
        {/* Home Route */}
        <Route index element={<HomePage />} />
        {/* Books detail route */}
        <Route path="/booksdetail" element={<BooksDetail />} />
        {/* All books route */}
        <Route path="/all-books" element={<AllBooks />} />
        {/* Category Books Route */}
        <Route path="/category-books" element={<CategoryBooks />} />
        {/* Borrowing Books Route*/}
        <Route path="/borrowing-books" element={<BorrowingBooks />} />
        {/* Borrowing Details Route */}
        <Route path="/borrowing-details" element={<BorrowingDetails />} />
        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
