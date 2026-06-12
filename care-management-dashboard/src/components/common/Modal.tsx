import {  useEffect, type ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({
  children,
  onClose,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          rounded-xl
          bg-white
          shadow-xl
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            text-gray-500
            hover:text-black
            text-xl
            font-bold
          "
        >
          ×
        </button>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}