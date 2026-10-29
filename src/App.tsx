import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Rent } from "./pages/Rent";
import { Services } from "./pages/Services";
import { Solutions } from "./pages/Solutions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rent" element={<Rent />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="how-it-works" element={<Navigate to="/services#how-it-works" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
