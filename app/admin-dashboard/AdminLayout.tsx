"use client";

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

  const toggleDrawer = () => setDrawerOpen((open) => !open);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 bg-gray-800">
        <button onClick={toggleDrawer} className="text-white md:hidden">
          ☰
        </button>
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </header>

      <div className="flex">
        <aside
          className={`bg-gray-800 text-white w-64 p-4 space-y-2 transition-all duration-300 ${
            drawerOpen ? "block" : "hidden"
          } md:block`}
        >
          <button
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => onSelectView("create-admin")}
          >
            + Crea Admin
          </button>
          <button
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => onSelectView("token-generator")}
          >
            + Genera Token
          </button>
          <button
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => onSelectView("question-form")}
          >
            + Aggiungi Domanda
          </button>
          <button
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
            onClick={() => onSelectView("question-list")}
          >
            + Visualizza Domande
          </button>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}