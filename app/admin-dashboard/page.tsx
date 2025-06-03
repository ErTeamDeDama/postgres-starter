"use client";

import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import CreateAdminForm from "./components/CreateAdminForm";
import TokenGeneratorForm from "./components/TokenGeneratorForm";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";
import { Analytics } from "@vercel/analytics/next"


export default function AdminPage() {
  const [view, setView] = useState("create-admin");

  const handleLogout = async () => {
    await fetch("/api/logout");
    window.location.href = "/";
  };

  const renderContent = () => {
    if (view === "create-admin") return <CreateAdminForm />;
    if (view === "token-generator") return <TokenGeneratorForm />;
    if (view === "question-form") return <QuestionForm />;
    if (view === "question-list") return <QuestionList />;
    return <div className="text-white">Nessuna vista selezionata</div>;
  };

  return (
    <>
    <Analytics/>
    <AdminLayout onSelectView={setView} onLogout={handleLogout}>
      {renderContent()}
    </AdminLayout>
    </>
  );
}
