export default function FilterBar({ city, setCity, category, setCategory, sort, setSort }) {
  return (
    <div className="filterBar">
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
        <option>Все категории</option>
        <option>Массаж</option>
        <option>Педикюр</option>
        <option>Ресницы</option>
        <option>Брови</option>
        <option>Лицо</option>
      </select>
      <select value={city} onChange={(event) => setCity(event.target.value)}>
        <option>Все города</option>
        <option>Тольятти</option>
        <option>Самара</option>
      </select>
      <select value={sort} onChange={(event) => setSort(event.target.value)}>
        <option>По рейтингу</option>
        <option>Сначала дешевле</option>
        <option>Сначала TOP</option>
      </select>
    </div>
  );
}
