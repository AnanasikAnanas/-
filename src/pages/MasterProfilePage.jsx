import {
  BadgeCheck,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { services } from "../data.js";
import PageShell from "../components/common/PageShell.jsx";

export default function MasterProfilePage({ master, onBack, openAuth }) {
  const masterServices = services.filter((service) => master.tags.includes(service.category));

  return (
    <PageShell title="Карточка мастера" text="Информация о специалисте, услугах, контактах и записи.">
      <button className="outlineButton backButton" onClick={onBack}>Назад к поиску</button>

      <div className="profileLayout">
        <section className="profileMain">
          <div className="profileTop">
            <img src={master.image} alt={master.name} />
            <div>
              <div className="profileNameRow">
                <div>
                  <h2>{master.name}</h2>
                  <p>{master.role}</p>
                </div>
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  {master.rating} · {master.reviews} отзывов
                </div>
              </div>

              <div className="infoGrid">
                <Info icon={Building2} label="Салон" value={master.salon} />
                <Info icon={MapPin} label="Город" value={master.city} />
                <Info icon={ShieldCheck} label="Образование" value={master.education} />
                <Info icon={BadgeCheck} label="Сертификаты" value={master.certificate} />
              </div>
            </div>
          </div>

          <div className="profileInfoBlocks">
            <InfoBlock title="О мастере" text={master.about} />
            <InfoBlock title="Оплата мастеру" text="Оплата возможна наличными или переводом после подтверждения записи." />
          </div>

          <div className="pricesBlock">
            <h3>Услуги и цены</h3>
            <div>
              {masterServices.map((service) => (
                <div key={service.id} className="priceRow">
                  <span>{service.name}</span>
                  <b>{service.price} ₽</b>
                </div>
              ))}
            </div>
          </div>

          <div className="reviewsBlock">
            <div>
              <h3>Отзывы</h3>
              <p>Пока показан демо-блок отзывов.</p>
            </div>
            <button className="primaryButton">Оставить отзыв</button>
          </div>
        </section>

        <aside className="profileAside">
          <div className="sideCard">
            <h3>Расписание</h3>
            <p>Ближайшие свободные окна</p>
            <div className="timeButtons">
              {["Сегодня, 15:00", "Завтра, 10:30", "Пятница, 18:00"].map((time) => (
                <button key={time}>{time}</button>
              ))}
            </div>
            <button className="darkButton wide" onClick={openAuth}>Записаться</button>
          </div>

          <div className="sideCard">
            <h3>Контакты</h3>
            <Info icon={Phone} label="Телефон" value="+7 999 456-45-45" />
            <Info icon={Clock} label="График" value="Пн-Пт 10:00–19:00" />
            <Info icon={Mail} label="Email" value="master@cosmetos.ru" />
          </div>

          <div className="sideCard">
            <h3>Похожие мастера</h3>
            <p>Подборка появится после подключения API.</p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="infoItem">
      <Icon size={18} />
      <div>
        <span>{label}</span>
        <b>{value}</b>
      </div>
    </div>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div className="infoBlock">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
