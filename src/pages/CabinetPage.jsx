import { useState } from "react";
import { cabinetMenu } from "../data.js";
import PageShell from "../components/common/PageShell.jsx";
import CabinetSidebar from "../components/cabinet/CabinetSidebar.jsx";
import AppointmentsPanel from "../components/cabinet/AppointmentsPanel.jsx";
import SchedulePanel from "../components/cabinet/SchedulePanel.jsx";
import AdsPanel from "../components/cabinet/AdsPanel.jsx";
import SalonCabinetPanel from "../components/cabinet/SalonCabinetPanel.jsx";
import StubPanel from "../components/cabinet/StubPanel.jsx";

export default function CabinetPage({ openAuth }) {
  const [active, setActive] = useState("appointments");
  const activeItem = cabinetMenu.find((item) => item.id === active);

  return (
    <PageShell title="Личный кабинет" text="Разные роли имеют похожую структуру, но получают свой набор функций.">
      <div className="notice">Пройдите модерацию аккаунта, заполните анкету и данные профиля.</div>

      <div className="cabinetLayout">
        <CabinetSidebar active={active} setActive={setActive} openAuth={openAuth} />

        <section className="cabinetContent">
          {active === "appointments" && <AppointmentsPanel />}
          {active === "schedule" && <SchedulePanel />}
          {active === "ads" && <AdsPanel />}
          {active === "salon" && <SalonCabinetPanel />}
          {!["appointments", "schedule", "ads", "salon"].includes(active) && <StubPanel title={activeItem?.label || "Раздел"} />}
        </section>
      </div>
    </PageShell>
  );
}
