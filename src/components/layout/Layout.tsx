import React from "react";

import { useLocation } from "@tanstack/react-location";

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
    p-6
  `}
`;

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const location = useLocation();
  const isHome = location.current.href === "/";

  return (
    <LayoutContainer>
      <Header isHome={isHome} />
      <LayoutMain>{children}</LayoutMain>
    </LayoutContainer>
  );
};

export default Layout;
