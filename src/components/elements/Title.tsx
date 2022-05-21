import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

type TitleColor = "red" | "orange" | "yellow" | "green" | "blue" | "purple";

export interface TitleProps {
  text: string;
  color?: TitleColor;
  level?: TitleLevel;
}

const TitleBase = styled.div.attrs((props: TitleProps) => {
  const { level, color } = props;
  const result: string[] = [];

  // font-size
  switch (level) {
    case 1:
      result.push("text-4xl");
      break;
    case 2:
      result.push("text-3xl");
      break;
    case 3:
      result.push("text-2xl");
      break;
    case 4:
      result.push("text-xl");
      break;
    case 5:
      result.push("text-lg");
      break;
    case 6:
      result.push("text-base");
      break;
    default:
      result.push("text-4xl");
      break;
  }

  // color
  switch (color) {
    case "red":
      result.push("text-red-500");
      break;
    case "orange":
      result.push("text-orange-400");
      break;
    case "yellow":
      result.push("text-yellow-500");
      break;
    case "green":
      result.push("text-green-500");
      break;
    case "blue":
      result.push("text-sky-500");
      break;
    case "purple":
      result.push("text-purple-600");
      break;
    default:
      result.push("text-sky-500");
      break;
  }

  return {
    className: result.join(" "),
  };
})<ClassProps>`
  ${tw`
    font-bold
  `}
`;

const Title = (props: TitleProps) => {
  const { text } = props;

  return (
    <TitleBase role="heading" aria-level={props.level} {...props}>
      {text}
    </TitleBase>
  );
};

export default Title;
