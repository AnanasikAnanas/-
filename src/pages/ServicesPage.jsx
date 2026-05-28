import { categories, services } from "../data.js";
import PageShell from "../components/common/PageShell.jsx";
import SearchPanel from "../components/common/SearchPanel.jsx";

export default function ServicesPage({ setPage }) {
  return (
    <PageShell title="Услуги" text="Категории, популярные услуги и быстрый переход к поиску мастера.">
      <SearchPanel compact setPage={setPage} />

      <section className="categoryGrid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button key={category.title} className="categoryCard" onClick={() => setPage("masters")}>
              <div><Icon /></div>
              <h3>{category.title}</h3>
              <p>Подобрать мастера</p>
            </button>
          );
        })}
      </section>

      <section className="tableCard">
        <h3>Все услуги</h3>
        <div className="tableScroll">
          <table>
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Средняя цена</th>
                <th>Длительность</th>
                <th>Мастеров</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>от {service.price} ₽</td>
                  <td>{service.duration} мин.</td>
                  <td>{service.masters}</td>
                  <td><button onClick={() => setPage("masters")}>Выбрать</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
