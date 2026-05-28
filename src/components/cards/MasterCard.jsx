import { ChevronRight, Star } from "lucide-react";

export default function MasterCard({ master, onOpen }) {
  return (
    <article className="masterCard cardHover">
      <div className="masterTop">
        <img src={master.image} alt={master.name} />
        <div className="masterInfo">
          <div className="cardTitleRow">
            <div>
              <h3>{master.name}</h3>
              <p>{master.role}</p>
            </div>
            {master.isTop && <span className="topBadge static">TOP</span>}
          </div>
          <div className="tagList">
            {master.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>

      <div className="masterStats">
        <div>
          <b>{master.rating}</b>
          <span>рейтинг</span>
        </div>
        <div>
          <b>{master.reviews}</b>
          <span>отзывов</span>
        </div>
        <div>
          <b>от {master.price} ₽</b>
          <span>цена</span>
        </div>
      </div>

      <button className="darkButton wide" onClick={onOpen}>
        Записаться
        <ChevronRight size={16} />
      </button>
    </article>
  );
}
