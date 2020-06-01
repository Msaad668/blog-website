import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span
        style={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: ".75rem",
        }}>
        &copy;{new Date().getFullYear()}All rights reserved
      </span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #344;
  height: 3rem;

  left: 0;
  bottom: 0;
  width: 100%;
`;
