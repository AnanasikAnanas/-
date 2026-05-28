import { useState } from "react";
import { MapPin, Search } from "lucide-react";

export default function SearchPanel({ compact = false, setPage }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("Тольятти");

  return (
    <div className={compact ? "searchPanel compact" : "searchPanel"}>
      <div className="searchGrid">
        <label className="searchField">
          <Search size={20} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Например: массаж, брови, ресницы" />
        </label>
        <label className="searchField">
          <MapPin size={20} />
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option>Тольятти</option>
            <option>Самара</option>
            <option>Москва</option>
          </select>
        </label>
        <button className="primaryButton searchButton" onClick={() => setPage("masters")}>Найти</button>
      </div>

      {!compact && (
        <div className="chips">
          <span>проверенные мастера</span>
          <span>салоны рядом</span>
          <span>онлайн-запись</span>
        </div>
      )}
    </div>
  );
}
