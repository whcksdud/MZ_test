import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Button from "./Button";
import Top from "./Top";
import mainIllust from "../../img/illust2.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "./Main.css";

const MainWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;
const Spacer = styled.div`
  height: 4rem;
`;

const useStyles = makeStyles({
  title: {
    fontSize: 25,
    marginBottom: "10px",
    marginTop: "10px",
    textAlign: "center",
    fontFamily: "spoqa-medium",
    fontWeight: "bold",
    color: "#6b8ff9",
  },
  text: {
    fontSize: 17,
    marginTop: "15px",
    textAlign: "center",
    fontFamily: "spoqa-regular",
    color: "black",
  },
  button: {
    textAlign: "center",
    marginTop: "70px",
  },
});

const Img = styled.img`
  width: 300px;
  overflow: hidden;
  margin-top: 11%;
  @media (max-width: 349px) {
    width: 100%;
  }
`;

const MainCard = ({ history }) => {
  const classes = useStyles();
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Top />
          <Img src={mainIllust} />
          <Typography className={classes.title}>내가 MZ 세대라고?</Typography>
          <Typography className={classes.text}>
            MZ 성향 테스트로 여러분이 <br />
            어느 세대인지 맞춰 드립니다
          </Typography>
          <Button
            className={classes.button}
            onClick={() => {
              history.push("/question/1");
            }}
          >
            지금 시작하기!
          </Button>
        </MainWrapper>
      </Wrapper>
      <Spacer />
    </>
  );
};

export default withRouter(MainCard);
