/* 전역 스타일 지정 */
import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1&family=Gowun+Dodum&family=IBM+Plex+Sans+KR&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100..900&family=Pacifico&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

  * {
    padding: 0;             // 전역 패딩 제거
    margin: 0;              // 전역 마진 제거
    box-sizing: border-box; // 박스 모델 border-box 설정
    font-family: "Gowun Dodum", sans-serif;  // 전역 폰트 설정
    font-weight: 400;
    font-style: normal;
  }

  // <html>, <body>, <div id="__gatsby"> 에 대해 높이 100% 설정
  html,
  body,
  #___gatsby {
    height: 100%;
  }
  
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

// Global 컴포넌트(efaultStyle에 정의된 전역 스타일을 페이지 적용) 반환
const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

// 모듈 내보내기
export default GlobalStyle
