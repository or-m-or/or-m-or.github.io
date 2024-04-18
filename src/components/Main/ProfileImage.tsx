/* 페이지 상단 소개 글 */
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'


type ProfileImageProps = {
    profileImage: IGatsbyImageData // 프로필 이미지 데이터 타입 지정
}

// Image Style 지정
const ProfileImageWrapper = styled(GatsbyImage)`
    width: 120px;        // 이미지 너비
    height: 120px;       // 이미지 높이
    margin-bottom: 30px; // 하단 마진
    border-radius: 50%;  // 원형 이미지

    @media (max-width: 768px) {
        width: 80px;     // 모바일 -> 이미지 너비
        height: 80px;    // 모바일 -> 이미지 높이
    }
`

// Image Styled Component
const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
    profileImage,
}) {
    return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage