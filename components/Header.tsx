import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled, { css } from "styled-components";

function Header() {
  const router = useRouter();
  const menuList = [
    { src: "/", name: "논문 추천 서비스 소개" },
    { src: "/recommend", name: "논문 추천" },
    { src: "/graph", name: "논문 Graph" },
    { src: "/academy", name: "관련 학회" },
    { src: "/notice", name: "고려대 대학원 연구 소식" },
    { src: "/survey", name: "설문 참여하기" },
  ];
  return (
    <HeaderContainer>
      <LOGO onClick={() => router.push("/")}>Kurator</LOGO>
      <MenuContainer>
        {menuList &&
          menuList.map((menu) => (
            <Link href={menu.src}>
              <Menu id={menu.src} pathname={router.pathname}>
                {menu.name}
              </Menu>
            </Link>
          ))}
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 2.5rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`;
const LOGO = styled.h1`
  font-size: 2.4rem;
  font-weight: 900;
  cursor: pointer;
`;

const MenuContainer = styled.nav`
  /* width: 80%; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 4rem;
`;
const Menu = styled.div<{ pathname: string }>`
  padding: 7px;
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;
  ${({ id, pathname }) =>
    id === pathname &&
    css`
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};
      &::after {
        content: "";
        position: absolute;
        left: calc(50% - 4px);
        bottom: -16px;
        border-radius: ${({ theme }) => theme.radii.full};
        width: 8px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    `}
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
