import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  );
}

export function Input({
  register,
  error,
  type = "text",
  placeholder
}: {
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...register}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600">{error.message}</p>
      )}
    </div>
  );
}

export function TextArea({
  register,
  error,
  rows = 4,
  placeholder
}: {
  register: UseFormRegisterReturn;
  error?: FieldError;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        {...register}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600">{error.message}</p>
      )}
    </div>
  );
}