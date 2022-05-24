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

  // font-size & color
  if (level === 1) {
    result.push("text-4xl");

    if (color === "red") {
      result.push("text-red-600");
    } else if (color === "orange") {
      result.push("text-orange-600");
    } else if (color === "yellow") {
      result.push("text-yellow-600");
    } else if (color === "green") {
      result.push("text-green-600");
    } else if (color === "blue") {
      result.push("text-sky-600");
    } else if (color === "purple") {
      result.push("text-purple-700");
    } else {
      result.push("text-sky-600");
    }
  } else if (level === 2) {
    result.push("text-3xl");

    if (color === "red") {
      result.push("text-red-500");
    } else if (color === "orange") {
      result.push("text-orange-500");
    } else if (color === "yellow") {
      result.push("text-yellow-500");
    } else if (color === "green") {
      result.push("text-green-500");
    } else if (color === "blue") {
      result.push("text-sky-500");
    } else if (color === "purple") {
      result.push("text-purple-600");
    } else {
      result.push("text-sky-500");
    }
  } else if (level === 3) {
    result.push("text-2xl");

    if (color === "red") {
      result.push("text-red-500");
    } else if (color === "orange") {
      result.push("text-orange-500");
    } else if (color === "yellow") {
      result.push("text-yellow-500");
    } else if (color === "green") {
      result.push("text-green-500");
    } else if (color === "blue") {
      result.push("text-sky-500");
    } else if (color === "purple") {
      result.push("text-purple-600");
    } else {
      result.push("text-sky-500");
    }
  } else if (level === 4) {
    result.push("text-xl");

    if (color === "red") {
      result.push("text-red-500");
    } else if (color === "orange") {
      result.push("text-orange-500");
    } else if (color === "yellow") {
      result.push("text-yellow-500");
    } else if (color === "green") {
      result.push("text-green-500");
    } else if (color === "blue") {
      result.push("text-sky-500");
    } else if (color === "purple") {
      result.push("text-purple-600");
    } else {
      result.push("text-sky-500");
    }
  } else if (level === 5) {
    result.push("text-lg");

    if (color === "red") {
      result.push("text-red-400");
    } else if (color === "orange") {
      result.push("text-orange-400");
    } else if (color === "yellow") {
      result.push("text-yellow-400");
    } else if (color === "green") {
      result.push("text-green-400");
    } else if (color === "blue") {
      result.push("text-sky-400");
    } else if (color === "purple") {
      result.push("text-purple-400");
    } else {
      result.push("text-sky-400");
    }
  } else if (level === 6) {
    result.push("text-base");

    if (color === "red") {
      result.push("text-red-400");
    } else if (color === "orange") {
      result.push("text-orange-400");
    } else if (color === "yellow") {
      result.push("text-yellow-400");
    } else if (color === "green") {
      result.push("text-green-400");
    } else if (color === "blue") {
      result.push("text-sky-400");
    } else if (color === "purple") {
      result.push("text-purple-400");
    } else {
      result.push("text-sky-400");
    }
  } else {
    result.push("text-4xl");

    if (color === "red") {
      result.push("text-red-600");
    } else if (color === "orange") {
      result.push("text-orange-600");
    } else if (color === "yellow") {
      result.push("text-yellow-600");
    } else if (color === "green") {
      result.push("text-green-600");
    } else if (color === "blue") {
      result.push("text-sky-600");
    } else if (color === "purple") {
      result.push("text-purple-700");
    } else {
      result.push("text-sky-600");
    }
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
