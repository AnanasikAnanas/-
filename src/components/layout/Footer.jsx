import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <div className="footerLogo">
            <Sparkles size={20} />
            Косметос
          </div>
          <p>Платформа для поиска проверенных мастеров, салонов и онлайн-записи.</p>
        </div>
        <div>
          <h3>Клиентам</h3>
          <p>Поиск услуг</p>
          <p>Отзывы</p>
          <p>Онлайн-запись</p>
        </div>
        <div>
          <h3>Мастерам</h3>
          <p>Профиль специалиста</p>
          <p>График работы</p>
          <p>Реклама</p>
        </div>
        <div>
          <h3>Салонам</h3>
          <p>Сотрудники</p>
          <p>Статистика</p>
          <p>Акции</p>
        </div>
      </div>
    </footer>
  );
}
