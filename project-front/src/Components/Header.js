import React from "react";
import { Image, Layout } from "antd";
import styled from "styled-components";

import MainHeaderLayout from "../Layouts/Main/MainHeaderLayout";

import logo from "../images/logo.png";

const { Sider, Content } = Layout;

const Header = (props) => {
  return (
    <>
      <Layout style={{ width: "100%" }}>
        <Layout
          style={{
            width: "980px",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
            borderBottom: "1px solid #F0F0F0",
          }}
        >
          <Sider>
            <Ul font_size="12px" margin="40px 0px 0px 0px" color="#F0F0F0">
              <Li margin="0px 13px 17px 0px">좋아요</Li>
              <Li margin="0px 13px 17px 0px">구독하기</Li>
              <Li margin="0px 13px 17px 0px">팔로우</Li>
            </Ul>
          </Sider>
          <Content style={{ marginTop: "17px" }}>
            <img src={logo} alt="LOTTE CINEMA" />
          </Content>
          <Sider>
            <Ul
              font_size="12px"
              margin="40px 0px 0px 0px"
              sort="flex-end"
              color="#F0F0F0"
            >
              <Li margin="0px 0px 17px 15px">멤버십</Li>
              <Li margin="0px 0px 17px 15px">고객센터</Li>
              <Li margin="0px 0px 17px 15px">로그인</Li>
            </Ul>
          </Sider>
        </Layout>

        <Layout
          style={{
            width: "980px",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <Sider></Sider>
          <Content>
            <Ul color="#fff">
              <Li padding="0px 24px">예매</Li>
              <Li padding="0px 24px">영화</Li>
              <Li padding="0px 24px">영화관</Li>
              <Li padding="0px 24px">이벤트</Li>
              <Li padding="0px 24px">스토어</Li>
            </Ul>
          </Content>
          <Sider>
            <Ul font_size="11px" sort="flex-end" color="#fff">
              <Li margin="0px 0px 0px 25px">회원가입</Li>
              <Li margin="0px 0px 0px 25px">전체</Li>
            </Ul>
          </Sider>
        </Layout>
      </Layout>
    </>
  );
};

const Ul = styled.ul`
  display: flex;
  list-style: none;
  ${(props) =>
    props.font_size
      ? `font-size: ${props.font_size};`
      : `font-size: 14px;`} // font-size
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)} // margin
  padding: 0px;
  ${(props) => (props.sort ? `justify-content: ${props.sort};` : ``)}
  color: ${(props) => props.color};
`;

const Li = styled.li`
  ${(props) => (props.margin ? `margin: ${props.margin};` : ``)}
  ${(props) => (props.padding ? `margin: ${props.padding};` : ``)}
  font-weight: 900;
`;

export default Header;
