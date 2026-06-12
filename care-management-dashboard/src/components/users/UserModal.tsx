import type { User } from "../../types/user";
import { useApp } from "../../context/AppContext";

interface UserModalProps {
  user: User;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserModal({
  user,
  onClose,
  onEdit,
  onDelete,
}: UserModalProps) {
  const { formSubmissions } = useApp();

  const submittedForms = formSubmissions.filter(
    (form: any) => form.userId === user.id
  );

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        p-4
        z-50
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-xl
          shadow-xl
          w-full
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            p-6
            border-b
          "
        >
          <h2 className="text-2xl font-bold">
            User Details
          </h2>

          <button
            onClick={onClose}
            className="
              text-gray-500
              hover:text-black
              text-xl
            "
          >
            ✕
          </button>
        </div>

        {/* Content */}

        <div className="p-6 space-y-6">
          {/* Personal Information */}

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Personal Information
            </h3>

            <div className="space-y-2">
              <p>
                <span className="font-medium">
                  Name:
                </span>{" "}
                {user.name}
              </p>

              <p>
                <span className="font-medium">
                  Email:
                </span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-medium">
                  Phone:
                </span>{" "}
                {user.phone}
              </p>
            </div>
          </div>

          {/* Address */}

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Address
            </h3>

            <div className="space-y-2">
              <p>
                <span className="font-medium">
                  Street:
                </span>{" "}
                {user.address?.street || "N/A"}
              </p>

              <p>
                <span className="font-medium">
                  City:
                </span>{" "}
                {user.address?.city || "N/A"}
              </p>

              <p>
                <span className="font-medium">
                  Zip Code:
                </span>{" "}
                {user.address?.zipcode || "N/A"}
              </p>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Company
            </h3>

            <p>
              <span className="font-medium">
                Company Name:
              </span>{" "}
              {user.company?.name || "N/A"}
            </p>
          </div>

          {/* Submitted Care Forms */}

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Submitted Care Forms
            </h3>

            {submittedForms.length === 0 ? (
              <div
                className="
                  text-gray-500
                  italic
                "
              >
                No forms submitted yet.
              </div>
            ) : (
              <div className="space-y-3">
                {submittedForms.map(
                  (form: any) => (
                    <div
                      key={form.id}
                      className="
                        border
                        rounded-lg
                        p-3
                        bg-gray-50
                      "
                    >
                      <div className="font-medium">
                        {form.formType}
                      </div>

                      <div className="text-sm text-gray-500">
                        Submitted on{" "}
                        {new Date(
                          form.submittedAt
                        ).toLocaleString()}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            border-t
            p-4
            flex
            justify-end
            gap-3
          "
        >
          <button
            onClick={onEdit}
            className="
              px-4
              py-2
              bg-blue-600
              text-white
              rounded-lg
              hover:bg-blue-700
            "
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="
              px-4
              py-2
              bg-red-600
              text-white
              rounded-lg
              hover:bg-red-700
            "
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="
              px-4
              py-2
              border
              rounded-lg
              hover:bg-gray-100
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}