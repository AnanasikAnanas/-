import { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import AuthModal from "./components/auth/AuthModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import MasterProfilePage from "./pages/MasterProfilePage.jsx";
import CabinetPage from "./pages/CabinetPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openMaster = (master) => {
    setSelectedMaster(master);
    setPage("master-profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPage = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header page={page} setPage={openPage} openAuth={() => setIsAuthOpen(true)} />

      {page === "home" && <HomePage setPage={openPage} openMaster={openMaster} />}
      {page === "masters" && <CatalogPage type="masters" setPage={openPage} openMaster={openMaster} />}
      {page === "salons" && <CatalogPage type="salons" setPage={openPage} openMaster={openMaster} />}
      {page === "services" && <ServicesPage setPage={openPage} />}
      {page === "cabinet" && <CabinetPage openAuth={() => setIsAuthOpen(true)} />}
      {page === "master-profile" && selectedMaster && (
        <MasterProfilePage master={selectedMaster} onBack={() => openPage("masters")} openAuth={() => setIsAuthOpen(true)} />
      )}

      <Footer />

      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}
