import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

type ButtonSize = "small" | "medium" | "large";

type ButtonColor = "primary" | "secondary" | "error" | "warning";

export interface ButtonProps {
  label: string;
  color?: ButtonColor;
  size?: ButtonSize;
  isDisabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonBase = styled.button.attrs((props: ButtonProps) => {
  const { color, size, isDisabled, fullWidth } = props;
  const result: string[] = [];

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
  } else if (color === "secondary") {
    result.push("bg-lime-500", "hover:bg-lime-400", "border-lime-500", "hover:border-lime-400", "text-white");
  } else if (color === "error") {
    result.push("bg-red-600", "hover:bg-red-500", "border-red-600", "hover:border-red-500", "text-white");
  } else if (color === "warning") {
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

  return {
    color,
    size,
    isDisabled,
    fullWidth,
    className: result.join(" "),
  };
})`
  ${tw`
    flex
    items-center
    justify-center
    border
    border-solid
  `}
`;

const Button = ({
  color = "primary",
  size = "medium",
  isDisabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const { label } = props;

  return (
    <ButtonBase color={color} size={size} isDisabled={isDisabled} fullWidth={fullWidth} {...props}>
      {label}
    </ButtonBase>
  );
};

export default Button;
