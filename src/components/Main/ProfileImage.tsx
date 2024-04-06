import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'


type ProfileImageProps = {
    profileImage: IGatsbyImageData
}

// // 자신이 원하는 프로필 이미지 링크로 설정해주세요.
// const PROFILE_IMAGE_LINK =
//     '<https://avatars.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4>'

const ProfileImageWrapper = styled(GatsbyImage)`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`

// Image Styled Component
const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
    profileImage,
}) {
    return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage