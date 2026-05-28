export default function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="statCard">
      <div className="statIcon">
        <Icon size={22} />
      </div>
      <div className="statValue">{value}</div>
      <div className="statLabel">{label}</div>
    </div>
  );
}
