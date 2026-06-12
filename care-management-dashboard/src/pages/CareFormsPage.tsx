import { useState } from "react";

import HealthAssessmentForm from "../components/forms/HealthAssessmentForm";
import IncidentReportForm from "../components/forms/IncidentReportForm";

type FormTab =
  | "health-assessment"
  | "incident-report";

export default function CareFormsPage() {
  const [activeTab, setActiveTab] =
    useState<FormTab>("health-assessment");

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Care Forms
        </h1>

        <p className="text-gray-500 mt-1">
          Complete and submit care forms for
          residents.
        </p>
      </div>

      {/* Tabs */}

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() =>
            setActiveTab("health-assessment")
          }
          className={`px-4 py-2 rounded-lg transition
            ${
              activeTab ===
              "health-assessment"
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-50"
            }`}
        >
          Health Assessment Form
        </button>

        <button
          onClick={() =>
            setActiveTab("incident-report")
          }
          className={`px-4 py-2 rounded-lg transition
            ${
              activeTab === "incident-report"
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-50"
            }`}
        >
          Incident Report Form
        </button>
      </div>

      {/* Form Container */}

      <div
        className="
          bg-white
          rounded-xl
          shadow-sm
          border
          p-6
        "
      >
        {activeTab ===
        "health-assessment" ? (
          <HealthAssessmentForm />
        ) : (
          <IncidentReportForm />
        )}
      </div>
    </div>
  );
}