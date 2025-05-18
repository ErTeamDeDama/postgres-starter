"use client";

import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import CreateAdminForm from "./components/CreateAdminForm";
import TokenGeneratorForm from "./components/TokenGeneratorForm";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

export default function AdminPage() {
  const [view, setView] = useState("create-admin");

  return (
    <AdminLayout
      onSelectView={setView}
      onLogout={() => {
        fetch("/api/logout").then(() => (window.location.href = "/admin"));
      }}
    >
      {view === "create-admin" && <CreateAdminForm />}
      {view === "token-generator" && <TokenGeneratorForm />}
      {view === "question-form" && <QuestionForm />}
      {view === "question-list" && <QuestionList />}
    </AdminLayout>
  );
}
