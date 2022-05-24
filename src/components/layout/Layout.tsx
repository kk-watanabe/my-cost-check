import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import Header from "@/components/common/Header";

const LayoutContainer = styled.div`
  ${tw`
    min-h-screen
    bg-slate-100
  `}
`;

const LayoutMain = styled.main`
  ${tw`
    p-4
  `}
`;

export interface LayoutProps {
  isHome: boolean;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { isHome, children } = props;

  return (
    <LayoutContainer>
      <Header isHome={isHome} />
      <LayoutMain>{children}</LayoutMain>
    </LayoutContainer>
  );
};

export default Layout;
