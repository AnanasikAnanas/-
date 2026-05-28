export default function PageShell({ title, text, children }) {
  return (
    <main className="pageShell">
      <div className="pageTitle">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {children}
    </main>
  );
}
