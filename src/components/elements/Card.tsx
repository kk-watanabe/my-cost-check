import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

export interface CardProps {
  children: React.ReactNode;
}

const CardContainer = styled.div`
  ${tw`
    p-6
    bg-white
    rounded-xl
    shadow-sm
    h-full
  `}
`;

const Card = (props: CardProps) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
