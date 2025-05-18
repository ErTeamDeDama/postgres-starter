"use client";

import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import CreateAdminForm from "./components/CreateAdminForm";
import TokenGeneratorForm from "./components/TokenGeneratorForm";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

export default function AdminPage() {
  const [view, setView] = useState<"create-admin" | "token-generator" | "question-form" | "question-list">("create-admin");

  const handleLogout = async () => {
    await fetch("/api/logout");
    window.location.href = "/admin";
  };

  const renderContent = () => {
    switch (view) {
      case "create-admin":
        return <CreateAdminForm />;
      case "token-generator":
        return <TokenGeneratorForm />;
      case "question-form":
        return <QuestionForm />;
      case "question-list":
        return <QuestionList />;
      default:
        return null;
    }
  };

  <AdminLayout onSelectView={setView as (view: string) => void} onLogout={handleLogout}>
  {renderContent()}
  </AdminLayout>
}
