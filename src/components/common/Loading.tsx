import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

const LoadingContainer = styled.header`
  ${tw`
    w-full
    h-screen
    flex
    justify-center
    content-center
  `}
`;

const LoadingIcon = styled.div`
  ${tw`
    animate-spin
    h-10
    w-10
    border-4
    border-sky-500
    rounded-full
    border-t-transparent
  `}
`;
const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon />
    </LoadingContainer>
  );
};

export default Loading;
