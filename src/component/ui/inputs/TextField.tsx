import { cn } from "@/lib/clsx";
import { ReactNode, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type TextFieldProps = {
  label?: string;
  icon?: ReactNode;
  type?: "text" | "password" | "date";
  required?: boolean;
  onClick?: () => void;
  register?: UseFormRegisterReturn<string>;
} & TextareaHTMLAttributes<HTMLInputElement>;
export const TextField = ({
  label,
  icon,
  required,
  register,
  onClick,
  ...props
}: TextFieldProps) => {
  return (
    <div className="relative w-full font-medium">
      {!onClick && (
        <span className="w-4 h-4 absolute left-4 top-[14px] z-10">{icon}</span>
      )}

      {label && (
        <p className="font-bold text-sm leading-[14px]">
          {label} {required && <span className="text-primaryColor">*</span>}
        </p>
      )}
      <input
        className={cn(
          "block w-full border-[2px] h-[44px] border-solid rounded-[6px] py-3 text-sm leading-[14px] outline-primaryColor placeholder:text-gray",
          onClick ? "pr-10 ps-4" : icon ? "pl-10 pr-4" : "px-4",
          label ? "mt-3" : ""
        )}
        {...props}
        {...register}
      />
      {onClick && (
        <span
          className="w-4 h-4 absolute right-6 top-[14px] z-10"
          onClick={onClick}
        >
          {icon}
        </span>
      )}
    </div>
  );
};
