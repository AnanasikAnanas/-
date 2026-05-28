export default function MiniStat({ value, label, icon: Icon, tone = "pink" }) {
  return (
    <div className="miniStat">
      <div className={`miniIcon ${tone}`}>
        <Icon size={21} />
      </div>
      <div className="miniValue">{value}</div>
      <div className="miniLabel">{label}</div>
    </div>
  );
}
