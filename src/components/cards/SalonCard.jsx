import { MapPin, Star } from "lucide-react";

export default function SalonCard({ salon }) {
  return (
    <article className="salonCard cardHover">
      <div className="cardImageWrap">
        <img src={salon.image} alt={salon.name} />
        {salon.isTop && <span className="topBadge">TOP</span>}
      </div>
      <div className="cardBody">
        <div className="cardTitleRow">
          <div>
            <h3>{salon.name}</h3>
            <p>
              <MapPin size={15} />
              {salon.city}, {salon.address}
            </p>
          </div>
          <div className="rating">
            <Star size={15} fill="currentColor" />
            {salon.rating}
          </div>
        </div>
        <button className="outlineButton wide">Смотреть салон</button>
      </div>
    </article>
  );
}
