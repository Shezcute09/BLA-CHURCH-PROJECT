import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { AudioTeachings } from "./components/AudioTeachings/AudioTeachings";
import { MediaInformation } from "./components/MediaInformation/MediaInformation";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/AudioTeachings",
      element: <AudioTeachings />,
    },
    {
      path: "/MediaInformation",
      element: <MediaInformation />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
