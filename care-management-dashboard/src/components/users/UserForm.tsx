import { useEffect } from "react";
import { useForm } from "react-hook-form";

import type { User } from "../../types/user";

interface UserFormProps {
  initialData?: User | null;
  onSubmit: (data: Partial<User>) => void;
  onCancel: () => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export default function UserForm({
  initialData,
  onSubmit,
  onCancel,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        email: initialData.email,
        phone: initialData.phone,
      });
    }
  }, [initialData, reset]);

  const submitHandler = (data: FormValues) => {
    if (initialData) {
      onSubmit({
        ...initialData,
        ...data,
      });
    } else {
      onSubmit(data);
    }

    reset();
  };

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-6
        border
      "
    >
      <h2 className="text-xl font-semibold mb-6">
        {initialData ? "Edit User" : "Add User"}
      </h2>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-5"
      >
        {/* NAME */}

        <div>
          <label className="block mb-1 font-medium">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message:
                  "Name must be at least 2 characters",
              },
            })}
            className="
              w-full
              border
              rounded-lg
              px-4
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}

        <div>
          <label className="block mb-1 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Please enter a valid email",
              },
            })}
            className="
              w-full
              border
              rounded-lg
              px-4
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PHONE */}

        <div>
          <label className="block mb-1 font-medium">
            Phone
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            {...register("phone", {
              required: "Phone number is required",
              
            })}
            className="
              w-full
              border
              rounded-lg
              px-4
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* ACTIONS */}

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-2
              rounded-lg
            "
          >
            {initialData
              ? "Update User"
              : "Add User"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="
              border
              px-5
              py-2
              rounded-lg
              hover:bg-gray-100
            "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}