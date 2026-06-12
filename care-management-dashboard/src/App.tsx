import { useState } from "react";
import UsersPage from "./pages/UsersPage";
import CareFormsPage from "./pages/CareFormsPage";

function App() {
  const [tab, setTab] = useState("users");

  return (
    <div className="min-h-screen p-6">

      <div className="flex gap-4 mb-6">

        <button
          onClick={() => setTab("users")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Users
        </button>

        <button
          onClick={() => setTab("forms")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Care Forms
        </button>

      </div>

      {tab === "users" ? (
        <UsersPage />
      ) : (
        <CareFormsPage />
      )}
    </div>
  );
}

export default App;