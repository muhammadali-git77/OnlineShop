import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const user = true;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to={"/"} /> : <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
