import React from "react";

type ButtonProps = React.ComponentProps<"button">;
export default function Button({ ...props }: ButtonProps) {
  return (
    <button className="bg-red-400 p-6" {...props}>
      {props.children}
    </button>
  );
}
