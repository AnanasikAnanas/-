import EmptyState from "../common/EmptyState.jsx";

export default function StubPanel({ title }) {
  return (
    <div>
      <div className="panelHeader">
        <h2>{title}</h2>
      </div>
      <EmptyState title="Раздел в разработке" text="Здесь будет форма загрузки и редактирования информации по выбранному разделу." />
    </div>
  );
}
