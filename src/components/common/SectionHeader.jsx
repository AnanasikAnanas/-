export default function SectionHeader({ title, text, action, onClick }) {
  return (
    <div className="sectionHeader">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {action && <button className="outlineButton" onClick={onClick}>{action}</button>}
    </div>
  );
}
