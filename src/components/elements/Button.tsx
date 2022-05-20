import React from "react";
import tw from "tailwind-styled-components";

type ButtonSize = "small" | "medium" | "large";

type ButtonType = "primary" | "secondary" | "error" | "warning";

export interface ButtonProps {
  label: string;
  type?: ButtonType;
  size?: ButtonSize;
  isDisabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const ButtonBase = tw.button`
  flex
  items-center
  justify-center
  border
  border-solid

  ${(props: ButtonProps) => {
    const { type, isDisabled, size, fullWidth } = props;
    const result = [];

    // Border Radius
    if (size === "small") {
      result.push("rounded");
    } else if (size === "large") {
      result.push("rounded-lg");
    } else {
      result.push("rounded-md");
    }

    // font-size
    if (size === "small") {
      result.push("text-sm");
    } else if (size === "large") {
      result.push("text-lg");
    } else {
      result.push("text-base");
    }

    // width
    if (fullWidth) {
      result.push("w-full");
    } else if (size === "small") {
      result.push("w-40");
    } else if (size === "large") {
      result.push("w-64");
    } else {
      result.push("w-52");
    }

    // height
    if (size === "small") {
      result.push("h-10");
    } else if (size === "large") {
      result.push("h-12");
    } else {
      result.push("h-11");
    }

    // border-color & bg-color
    if (isDisabled) {
      result.push("bg-slate-500", "border-slate-500", "text-slate-300");
    } else if (type === "secondary") {
      result.push("bg-lime-500", "hover:bg-lime-400", "border-lime-500", "hover:border-lime-400", "text-white");
    } else if (type === "error") {
      result.push("bg-red-600", "hover:bg-red-500", "border-red-600", "hover:border-red-500", "text-white");
    } else if (type === "warning") {
      result.push("bg-amber-500", "hover:bg-amber-400", "border-amber-500", "hover:border-amber-400", "text-white");
    } else {
      result.push("bg-sky-500", "hover:bg-sky-400", "border-sky-500", "hover:border-sky-400", "text-white");
    }

    // when isDisabled
    if (isDisabled) {
      result.push("pointer-events-none");
    } else {
      result.push("font-bold", "transition");
    }

    return result.join(" ");
  }}
`;

const Button = ({
  type = "primary",
  size = "medium",
  isDisabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const { label } = props;

  return (
    <ButtonBase type={type} size={size} isDisabled={isDisabled} fullWidth={fullWidth} {...props}>
      {label}
    </ButtonBase>
  );
};

export default Button;
