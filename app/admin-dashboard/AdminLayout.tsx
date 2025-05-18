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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 shadow-md">
        {/* Hamburger */}
        <div
          className="md:hidden cursor-pointer space-y-1"
          onClick={toggleDrawer}
          role="button"
          aria-label="Apri menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleDrawer();
          }}
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
        </div>

        <h1 className="text-xl font-semibold">Admin Panel</h1>

        <button
          onClick={onLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition hidden md:inline-block"
        >
          Logout
        </button>
      </header>

      {/* Sidebar mobile */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Navigazione</h2>
          <ul className="space-y-2">
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => {
                onSelectView("create-admin");
                setDrawerOpen(false);
              }}
            >
              + Crea Admin
            </li>
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => {
                onSelectView("token-generator");
                setDrawerOpen(false);
              }}
            >
              + Genera Token
            </li>
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => {
                onSelectView("question-form");
                setDrawerOpen(false);
              }}
            >
              + Aggiungi Domanda
            </li>
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => {
                onSelectView("question-list");
                setDrawerOpen(false);
              }}
            >
              + Visualizza Domande
            </li>
            <li
              className="mt-4 text-red-600 cursor-pointer hover:underline"
              onClick={onLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar desktop */}
      <div className="hidden md:flex">
        <aside className="w-64 bg-white p-6 shadow-md min-h-screen">
          <h2 className="text-lg font-bold mb-4">Navigazione</h2>
          <ul className="space-y-2">
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => onSelectView("create-admin")}
            >
              + Crea Admin
            </li>
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => onSelectView("token-generator")}
            >
              + Genera Token
            </li>
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => onSelectView("question-form")}
            >
              + Aggiungi Domanda
            </li>
            <li
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => onSelectView("question-list")}
            >
              + Visualizza Domande
            </li>
            <li
              className="mt-4 text-red-600 cursor-pointer hover:underline"
              onClick={onLogout}
            >
              Logout
            </li>
          </ul>
        </aside>
      </div>

      {/* Main Content */}
      <main className="md:ml-64 p-6">{children}</main>
    </div>
  );
}
