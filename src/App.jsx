// CSS
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import LeaveMessage from "./pages/LeaveMessage";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import SideLayout from "./Layouts/SideLayout";
import RootLayout from "./Layouts/RootLayout";
import About from "./pages/About";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
