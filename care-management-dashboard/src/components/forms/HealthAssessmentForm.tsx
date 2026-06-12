import { useForm } from "react-hook-form";
import { useApp } from "../../context/AppContext";

interface HealthAssessmentData {
  userId: number;

  residentName: string;
  caregiverName: string;
  date: string;
  age: number;
  gender: string;
  roomNo: string;

  temperature: string;
  bloodPressure: string;
  heartRate: string;
  oxygenLevel: string;
  respiratoryRate: string;

  fever: boolean;
  cough: boolean;
  fatigue: boolean;
  headache: boolean;
  shortnessOfBreath: boolean;
  dizziness: boolean;

  caregiverNotes: string;

  walkMorning: boolean;
  walkAfternoon: boolean;
  walkEvening: boolean;

  exerciseMorning: boolean;
  exerciseAfternoon: boolean;
  exerciseEvening: boolean;

  therapyMorning: boolean;
  therapyAfternoon: boolean;
  therapyEvening: boolean;

  socialMorning: boolean;
  socialAfternoon: boolean;
  socialEvening: boolean;

  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  snacks: boolean;

  breakfastNotes: string;
  lunchNotes: string;
  dinnerNotes: string;
  snacksNotes: string;

  caregiverSignature: string;
}

export default function HealthAssessmentForm() {
  const { users, formSubmissions, setFormSubmissions } =
    useApp();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HealthAssessmentData>();

  const onSubmit = (
    data: HealthAssessmentData
  ) => {
    const submission = {
      id: crypto.randomUUID(),
      userId: Number(data.userId),
      formType: "Health Assessment",
      submittedAt: new Date().toISOString(),
      data,
    };

    setFormSubmissions([
      ...formSubmissions,
      submission,
    ]);

    alert("Form submitted successfully!");

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
          User Selection
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
          <p className="text-red-500 text-sm">
            {errors.userId.message}
          </p>
        )}
      </section>

      {/* RESIDENT INFO */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Resident Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Resident Name"
            {...register("residentName", {
              required: true,
            })}
            className="border rounded p-2"
          />

          <input
            placeholder="Caregiver Name"
            {...register("caregiverName", {
              required: true,
            })}
            className="border rounded p-2"
          />

          <input
            type="date"
            {...register("date", {
              required: true,
            })}
            className="border rounded p-2"
          />

          <input
            type="number"
            placeholder="Age"
            {...register("age", {
              required: true,
            })}
            className="border rounded p-2"
          />

          <input
            placeholder="Gender"
            {...register("gender", {
              required: true,
            })}
            className="border rounded p-2"
          />

          <input
            placeholder="Room No"
            {...register("roomNo")}
            className="border rounded p-2"
          />
        </div>
      </section>

      {/* VITAL SIGNS */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Vital Signs
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Temperature °C"
            {...register("temperature")}
            className="border rounded p-2"
          />

          <input
            placeholder="Blood Pressure"
            {...register("bloodPressure")}
            className="border rounded p-2"
          />

          <input
            placeholder="Heart Rate"
            {...register("heartRate")}
            className="border rounded p-2"
          />

          <input
            placeholder="Oxygen Level"
            {...register("oxygenLevel")}
            className="border rounded p-2"
          />

          <input
            placeholder="Respiratory Rate"
            {...register("respiratoryRate")}
            className="border rounded p-2"
          />
        </div>
      </section>

      {/* SYMPTOMS */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Symptoms Observed
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <label>
            <input
              type="checkbox"
              {...register("fever")}
            />{" "}
            Fever
          </label>

          <label>
            <input
              type="checkbox"
              {...register("cough")}
            />{" "}
            Cough
          </label>

          <label>
            <input
              type="checkbox"
              {...register("fatigue")}
            />{" "}
            Fatigue
          </label>

          <label>
            <input
              type="checkbox"
              {...register("headache")}
            />{" "}
            Headache
          </label>

          <label>
            <input
              type="checkbox"
              {...register(
                "shortnessOfBreath"
              )}
            />{" "}
            Shortness of Breath
          </label>

          <label>
            <input
              type="checkbox"
              {...register("dizziness")}
            />{" "}
            Dizziness
          </label>
        </div>
      </section>

      {/* NOTES */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Caregiver Notes
        </h2>

        <textarea
          rows={5}
          {...register("caregiverNotes")}
          className="w-full border rounded p-2"
        />
      </section>

      {/* ACTIVITIES */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Daily Activities
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2">
                  Activity
                </th>
                <th className="border p-2">
                  Morning
                </th>
                <th className="border p-2">
                  Afternoon
                </th>
                <th className="border p-2">
                  Evening
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2">
                  Walk
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "walkMorning"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "walkAfternoon"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "walkEvening"
                    )}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  Exercise
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "exerciseMorning"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "exerciseAfternoon"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "exerciseEvening"
                    )}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  Therapy
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "therapyMorning"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "therapyAfternoon"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "therapyEvening"
                    )}
                  />
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  Social Interaction
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "socialMorning"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "socialAfternoon"
                    )}
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    {...register(
                      "socialEvening"
                    )}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MEALS */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Nutrition
        </h2>

        <div className="space-y-3">
          <label className="block">
            <input
              type="checkbox"
              {...register("breakfast")}
            />{" "}
            Breakfast
          </label>

          <label className="block">
            <input
              type="checkbox"
              {...register("lunch")}
            />{" "}
            Lunch
          </label>

          <label className="block">
            <input
              type="checkbox"
              {...register("dinner")}
            />{" "}
            Dinner
          </label>

          <label className="block">
            <input
              type="checkbox"
              {...register("snacks")}
            />{" "}
            Snacks
          </label>
        </div>
      </section>

      {/* SIGNATURE */}

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Caregiver Signature
        </h2>

        <input
          placeholder="Signature"
          {...register(
            "caregiverSignature",
            {
              required: true,
            }
          )}
          className="w-full border rounded p-2"
        />
      </section>

      {/* SUBMIT */}

      <button
        type="submit"
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-lg
        "
      >
        Submit Health Assessment
      </button>
    </form>
  );
}