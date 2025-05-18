import React from "react";

export default function AdminLayout({
  children,
  onSelectView,
  onLogout,
}: {
  children: React.ReactNode;
  onSelectView: (view: string) => void;
  onLogout: () => void;
}) {
  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Panel</h1>
        <button className="logout-minimal" onClick={onLogout}>
          Logout
        </button>
      </header>

      <nav className="side-drawer open">
        <ul>
          <li onClick={() => onSelectView("create-admin")}>+ Crea Admin</li>
          <li onClick={() => onSelectView("token-generator")}>+ Genera Token</li>
          <li onClick={() => onSelectView("question-form")}>+ Aggiungi Domanda</li>
          <li onClick={() => onSelectView("question-list")}>+ Visualizza Domande</li>
        </ul>
      </nav>

      <main className="admin-main">{children}</main>
    </div>
  );
}
