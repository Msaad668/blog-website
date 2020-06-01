import React, { Fragment } from "react";
import styled from "styled-components";
const Header = (props) => {
  return (
    <Fragment>
      <MainContainer></MainContainer>
    </Fragment>
  );
};

export default Header;

const MainContainer = styled.header`
  background: url(https://blog.thedigitalpark.com/wp-content/uploads/2019/06/Main-Image.jpg)
    no-repeat center/cover;
  height: 25rem;

  h1 {
    transform: translate(-50%, 50%);
    color: #fff;
    font-weight: 900;
    position: absolute;
    top: 15%;
    left: 50%;
  }
`;
