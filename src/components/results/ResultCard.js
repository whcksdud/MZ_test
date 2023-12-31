import React, { useState, useEffect } from "react";
import Wrapper from "../common/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import result from "../../contents/result";
import Loading from "../common/Loading";
import "../common/Main.css";
import styled from "styled-components";
import $ from "jquery";
import r1 from "../../img/r1.png";
import r2 from "../../img/r2.png";
import r3 from "../../img/r3.png";
import r4 from "../../img/r4.png";
import r5 from "../../img/r5.png";
const useStyles = makeStyles({
  title: {
    fontSize: 23,
    marginTop: "10%",
    marginBottom: "5px",
    textAlign: "center",
    fontFamily: "spoqa-medium",
    fontWeight: "bold",
    color: "#6B8FF9",
  },
  contentTitle: {
    fontSize: 20,
    marginTop: "5px",
    textAlign: "center",
    fontFamily: "spoqa-medium",
    fontWeight: "bold",
    color: "black",
  },
  button: {
    textAlign: "center",
    fontFamily: "spoqa-regular",
    marginTop: "5%",
  },
});
const Result = styled.div`
  text-align: center;
`;

// const Text = styled.div`
//   text-align: center;
//   font-size: 13px;
//   padding: auto;
//   margin: auto;
//   color: #6b8ff9;
// `;
// const TextBox = styled.div`
//   display: flex;
//   margin: 5%;
//   height: 40px;
//   text-align: center;
//   border: 1px solid #6b8ff9;
//   border-radius: 12px;

//   textarea {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
// `;
const Share = styled.span`
  text-align: center;
  font-size: 13px;
  padding: auto;
  margin: auto;
  color: white;
`;
const ShareBox = styled.div`
  display: flex;
  margin: 5%;
  height: 40px;
  text-align: center;
  border: 1px solid #6b8ff9;
  border-radius: 12px;
  button {
    display: flex;
    width: 100%;
    background: #2a3886;
    outline: none;
    border: none;
  }
  textarea {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Notice = styled.div`
  display: none;
  position: fixed;
  background: rgb(0, 0, 0, 0.8);
  margin-bottom: 50%;
  color: white;
  z-index: 1000;
  width: 300px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const ResultCard = ({ match }) => {
  const [showResult, setShowResult] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const tick = setTimeout(() => {
      setShowResult(true);
    }, 3000);
    return () => clearTimeout(tick);
  });
  const copyUrlRef = React.useRef();
  const copyUrl = (e) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원 되지 않는 브라우저입니다.");
    } else {
      copyUrlRef.current.select();
      document.execCommand("copy");
      e.target.focus();
      //링크 복사 함수
      $(".show").css("display", "flex");
      const time = setTimeout(() => {
        $(".show").css("display", "none");
      }, 1000);
      return () => clearTimeout(time);
    }
  };

  return (
    <>
      <Wrapper>
        {showResult && (
          <Result>
            <img
              //src={require(result[match.params.tendency]).default}
              src={result[match.params.tendency]}
              width="100%"
              hegiht="100%"
            />
            {/* <TextBox>
              <Share>설명</Share>
            </TextBox> */}
            <ShareBox>
              <button onClick={copyUrl}>
                <Share>링크로 테스트 공유하기</Share>

                <form>
                  <textarea
                    ref={copyUrlRef}
                    defaultValue={window.location.href}
                    readOnly
                  />
                </form>
              </button>
            </ShareBox>
          </Result>
        )}
        {!showResult && <Loading done={100} />}
        <Notice className="show">클립보드에 링크가 복사되었습니다.</Notice>
      </Wrapper>
    </>
  );
};

export default ResultCard;
