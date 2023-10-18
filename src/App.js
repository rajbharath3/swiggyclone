import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About"; 4
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestuarantMenu";
import useOnline from "./utils/useOnline";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const Instamart = lazy(() => import("./components/Instamart"))


const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Bharath raj",
    email: "bharath@gmail.com"
  })



  const isOnline = useOnline();
  if (!isOnline) return <h1>Oops...you may have lost your internet connection...</h1>;


  return (
    <Provider store={store}>
      <userContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}>
          <Instamart />
        </Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
