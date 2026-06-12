import { useForm } from "react-hook-form";
import { useApp } from "../../context/AppContext";

interface IncidentReportData {
  userId: number;

  residentName: string;
  caregiverName: string;
  date: string;
  time: string;
  location: string;
  roomNo: string;

  fall: boolean;
  medicationError: boolean;
  injury: boolean;
  behavioralIssue: boolean;
  other: boolean;

  incidentDescription: string;

  doctorNotified: boolean;
  familyNotified: boolean;
  medicationGiven: boolean;
  observationContinued: boolean;

  followUpNotes: string;
}

export default function IncidentReportForm() {
  const {
    users,
    formSubmissions,
    setFormSubmissions,
  } = useApp();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IncidentReportData>();

  const onSubmit = (
    data: IncidentReportData
  ) => {
    const submission = {
      id: crypto.randomUUID(),
      userId: Number(data.userId),
      formType: "Incident Report",
      submittedAt: new Date().toISOString(),
      data,
    };

    setFormSubmissions([
      ...formSubmissions,
      submission,
    ]);

    alert("Incident Report Submitted!");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* USER */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Select User
        </h2>

        <select
          {...register("userId", {
            required: "Please select a user",
          })}
          className="w-full border rounded p-2"
        >
          <option value="">
            Select User
          </option>

          {users.map((user: any) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>

        {errors.userId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.userId.message}
          </p>
        )}
      </section>

      {/* RESIDENT DETAILS */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Resident & Incident Details
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Resident Name"
            {...register("residentName", {
              required: "Resident name is required",
            })}
            className="border rounded p-2"
          />

          <input
            placeholder="Caregiver Name"
            {...register("caregiverName", {
              required: "Caregiver name is required",
            })}
            className="border rounded p-2"
          />

          <input
            type="date"
            {...register("date", {
              required: "Date is required",
            })}
            className="border rounded p-2"
          />

          <input
            type="time"
            {...register("time", {
              required: "Time is required",
            })}
            className="border rounded p-2"
          />

          <input
            placeholder="Location"
            {...register("location", {
              required: "Location is required",
            })}
            className="border rounded p-2"
          />

          <input
            placeholder="Room Number"
            {...register("roomNo")}
            className="border rounded p-2"
          />
        </div>
      </section>

      {/* INCIDENT TYPE */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Incident Type
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("fall")}
            />
            Fall
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("medicationError")}
            />
            Medication Error
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("injury")}
            />
            Injury
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("behavioralIssue")}
            />
            Behavioral Issue
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("other")}
            />
            Other
          </label>
        </div>
      </section>

      {/* DESCRIPTION */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Incident Description
        </h2>

        <textarea
          rows={6}
          {...register(
            "incidentDescription",
            {
              required:
                "Incident description is required",
            }
          )}
          className="
            w-full
            border
            rounded
            p-3
          "
          placeholder="Describe what happened..."
        />

        {errors.incidentDescription && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.incidentDescription
                .message
            }
          </p>
        )}
      </section>

      {/* ACTIONS TAKEN */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Follow-up & Action Taken
        </h2>

        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register(
                "doctorNotified"
              )}
            />
            Doctor Notified
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register(
                "familyNotified"
              )}
            />
            Family Notified
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register(
                "medicationGiven"
              )}
            />
            Medication Given
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register(
                "observationContinued"
              )}
            />
            Observation Continued
          </label>
        </div>
      </section>

      {/* FOLLOW UP NOTES */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Additional Follow-up Notes
        </h2>

        <textarea
          rows={5}
          {...register("followUpNotes")}
          className="
            w-full
            border
            rounded
            p-3
          "
          placeholder="Additional notes..."
        />
      </section>

      {/* SUBMIT */}

      <div>
        <button
          type="submit"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-lg
            font-medium
          "
        >
          Submit Incident Report
        </button>
      </div>
    </form>
  );
}