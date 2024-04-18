/* Footer 스타일 지정 */
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'


// Footer 컴포넌트 스타일 지정
const FooterWrapper = styled.footer`
  display: grid;        // CSS Grid 레이아웃 사용
  place-items: center;  // grid의 place-items 속성으로 가운데 정렬
  margin-top: auto;     // 컴포넌트를 수직으로 페이지 하단에 위치 
  padding: 50px 0;      // 상하 패딩 50px, 좌우 패딩 0px
  font-size: 15px;      // 폰트 크기를 15px로 설정
  text-align: center;   // 텍스트 가운데 정렬
  line-height: 1.5;     // 줄 간격 1.5

  // 모바일 환경 설정
  @media (max-width: 768px) {
    font-size: 13px;    // 화면 너비 768px 이하일 경우 - 폰트 크기 13px
  }
`

// Footer 컴포넌트 랜더링
const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <br />© Developer or-m-or 🤗, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer