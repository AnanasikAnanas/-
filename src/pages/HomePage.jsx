import { BadgeCheck, CalendarDays, Sparkles, Star, Users } from "lucide-react";
import { masters, salons } from "../data.js";
import SearchPanel from "../components/common/SearchPanel.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import StatCard from "../components/common/StatCard.jsx";
import SalonCard from "../components/cards/SalonCard.jsx";
import MasterCard from "../components/cards/MasterCard.jsx";

export default function HomePage({ setPage, openMaster }) {
  return (
    <main>
      <section className="hero">
        <div>
          <div className="heroBadge">
            <BadgeCheck size={16} />
            Проверенные мастера и салоны
          </div>
          <h1>Найдем мастера рядом с вами</h1>
          <p>Сервис для поиска косметологических услуг, популярных салонов и специалистов с возможностью онлайн-записи.</p>
          <SearchPanel setPage={setPage} />
        </div>

        <div className="heroImageCard">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80" alt="Салон красоты" />
          <div className="heroFloatingCard">
            <div>
              <span>Популярный салон</span>
              <h3>Beauty Space</h3>
            </div>
            <b><Star size={16} fill="currentColor" /> 4.9</b>
          </div>
        </div>
      </section>

      <section className="statsGrid">
        <StatCard value="3,4К+" label="мастеров в базе" icon={Users} />
        <StatCard value="11,9М+" label="записей создано" icon={CalendarDays} />
        <StatCard value="4,8/5" label="средний рейтинг" icon={Sparkles} />
      </section>

      <SectionHeader title="Популярные салоны" text="Салоны, которые можно вывести в топ по подписке" action="Все салоны" onClick={() => setPage("salons")} />
      <section className="cardsGrid">
        {salons.map((salon) => <SalonCard key={salon.id} salon={salon} />)}
      </section>

      <SectionHeader title="Популярные исполнители" text="Проверенные специалисты с быстрым бронированием" action="Все мастера" onClick={() => setPage("masters")} />
      <section className="cardsGrid">
        {masters.map((master) => <MasterCard key={master.id} master={master} onOpen={() => openMaster(master)} />)}
      </section>
    </main>
  );
}
