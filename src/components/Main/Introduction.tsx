/* 사용자 소개 페이지 컴포넌트 정의 */
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'


type IntroductionProps = {
  profileImage: IGatsbyImageData // 프로필 이미지 데이터 타입
}

const Background = styled.div`
    width: 100%;
    background-color: #ffffff;
    // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);  // 제목 배경 색
    color: #000000;  // 제목 글자 색
`

const Wrapper = styled.div`
    display: flex;           // flexbox 레이아웃 모델 사용(유연하게 배치)
    flex-direction: column;  // flexbox 방향을 수직으로 설정, 수직으로 쌓임
    justify-content: center; // flex 컨테이너의 주축에 따라 가운데 정렬
    align-items: flex-start; // flex 컨테이너의 교차축에 따라 왼쪽 정렬
    width: 768px;   // 컨테이너 너비 
    height: 80px;  // 컨테이너 높이 
    margin: 0 auto; // 컨테이너 상하 마진 0, 좌우 마진 auto
    

    // 반응형 디자인을 위한 미디어 쿼리, maxwidth 일 때부터 적용됨.
    @media (maxwidth: 768px){
        width: 100%;     // 모바일시 적용 너비
        height: 300px;   // 모바일시 적용 높이
        padding: 0 20px; // 모바일시 패딩 조정 (상,하단 마진 0, 좌우 여분 20픽셀)
    }
`

// 서브 타이틀 설정
const SubTitle = styled.div`
    font-size: 20px;   // 폰트 크기
    font-weight: 400;  // 폰트 두께

    @media (max-width: 768px) {
        font-size: 15px; // 모바일 사용 시 폰트 크기
    }
`

// 타이틀 설정
const Title = styled.div`
    margin-top: 5px;
    font-size: 30px;
    font-weight: 700;
    font-family: "Pacifico", cursive;
    
    @media (max-width: 768px) {
        font-size: 20px;
    }
`


const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        {/* <ProfileImage profileImage={profileImage}/> */}

        <div>
          <Title>ormor</Title>
          {/* <SubTitle>Nice to Meet You,</SubTitle> */}
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction