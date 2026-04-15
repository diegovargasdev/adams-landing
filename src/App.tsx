import { Routes, Route } from "react-router-dom";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer";
import LinkInBioPage from "./pages/LinkInBioPage";
import ColaboraPage from "./components/ColaboraPage";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop/:id" element={<WorkshopDetailPage />} />
        <Route path="/redes" element={<LinkInBioPage />} />
        <Route path="/colabora" element={<ColaboraPage />} />
      </Routes>
      <Footer />
    </>
  );
}