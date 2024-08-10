import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import PlaceDetails from "./pages/details";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/place/:id",
      element: <PlaceDetails />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
