import { useMemo, useState } from "react";
import { masters, salons } from "../data.js";
import EmptyState from "../components/common/EmptyState.jsx";
import FilterBar from "../components/common/FilterBar.jsx";
import PageShell from "../components/common/PageShell.jsx";
import SearchPanel from "../components/common/SearchPanel.jsx";
import MasterCard from "../components/cards/MasterCard.jsx";
import SalonCard from "../components/cards/SalonCard.jsx";

export default function CatalogPage({ type, setPage, openMaster }) {
  const [category, setCategory] = useState("Все категории");
  const [city, setCity] = useState("Все города");
  const [sort, setSort] = useState("По рейтингу");

  const filteredMasters = useMemo(() => {
    return masters.filter((master) => {
      const byCategory = category === "Все категории" || master.tags.includes(category);
      const byCity = city === "Все города" || master.city === city;

      return byCategory && byCity;
    });
  }, [category, city]);

  if (type === "salons") {
    return (
      <PageShell title="Популярные салоны" text="Выбирайте салон по городу, рейтингу и доступным услугам.">
        <FilterBar city={city} setCity={setCity} category={category} setCategory={setCategory} sort={sort} setSort={setSort} />
        <section className="cardsGrid catalog">
          {salons.map((salon) => <SalonCard key={salon.id} salon={salon} />)}
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell title="Найдем мастера" text="Фильтруйте специалистов по категории, городу и рейтингу.">
      <SearchPanel compact setPage={setPage} />
      <FilterBar city={city} setCity={setCity} category={category} setCategory={setCategory} sort={sort} setSort={setSort} />

      <div className="resultHeader">
        <h3>Найдено {filteredMasters.length} мастера</h3>
        <span>{sort}</span>
      </div>

      <section className="masterCatalog">
        {filteredMasters.map((master) => <MasterCard key={master.id} master={master} onOpen={() => openMaster(master)} />)}
        {filteredMasters.length === 0 && <EmptyState title="Мастера не найдены" text="Попробуйте изменить город или категорию услуги." />}
      </section>
    </PageShell>
  );
}
