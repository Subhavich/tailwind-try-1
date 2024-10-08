import { twMerge } from "tailwind-merge";
export default function ModalBlock({ className, ...rest }) {
  return (
    <div
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-1 sm:p-6 overflow-clip",
        className
      )}
      {...rest}
    />
  );
}
