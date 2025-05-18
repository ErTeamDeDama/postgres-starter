import React, { useState } from "react";

export default function AdminLayout({
  children,
  onSelectView,
  onLogout,
}: {
  children: React.ReactNode;
  onSelectView: (view: string) => void;
  onLogout: () => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((open) => !open);
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        {/* Hamburger menu */}
        <div
          className={`menu-icon ${drawerOpen ? "open" : ""}`}
          onClick={toggleDrawer}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleDrawer();
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <h1>Admin Panel</h1>

        <button className="logout-minimal" onClick={onLogout}>
          Logout
        </button>
      </header>

      <nav className={`side-drawer ${drawerOpen ? "open" : ""}`}>
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
