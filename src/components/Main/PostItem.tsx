import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

// Props 타입 정의: 포스트의 프론트매터 정보 및 링크 URL 포함
type PostItemProps = PostFrontmatterType & { link:string }

// 게시물 아이템을 감싸는 링크 컴포넌트 스타일 정의
const PostItemWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);  // 가벼운 그림자
    transition: 0.3s box-shadow;                // 그림자 애니메이션 효과
    cursor: pointer;
    max-width: 340px;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); // 호버 시 그림자 강조
    }
`

// 게시물 썸네일 이미지 스타일 정의
const ThumbnailImage = styled(GatsbyImage)`
    width: 100%;
    height: 200px;
    border-radius: 0; // 상단에 둥근 모서리 10px 10px 0 0
    object-fit: cover;            // 이미지 비율 유지하며 컨테이너 채움
`

// 게시물 내용을 담는 컨테이너 스타일
const PostItemContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
`

// 게시물 제목 스타일
const Title = styled.div`
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 3px;
    text-overflow: ellipsis;      // 텍스트 오버플로 처리
    white-space: normal;
    overflow-wrap: break-word;    // 단어가 넘칠 때 자동으로 줄바꿈
    -webkit-line-clamp: 2;        // 최대 줄 표시
    -webkit-box-orient: vertical;  
    font-size: 20px;
    font-weight: 700;
`

// 게시물 날짜 스타일
const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
`

// 카테고리 전체 목록 스타일
const Category = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin: 10px -5px;
`

// 개별 카테고리 아이템 스타일
const CategoryItem = styled.div`
    margin: 2.5px 5px;
    padding: 3px 5px;
    border-radius: 3px;
    background: black;
    font-size: 14px;
    font-weight: 700;
    color: white;
`

// 게시물 요약 스타일
const Summary = styled.div`
    display: -webkit-box;
    overflow: hidden;
    margin-top: auto;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 16px;
    opacity: 0.8;
    margin-bottom: 20px;
`

// PostItem 컴포넌트 정의 및 렌더링
const PostItem: FunctionComponent<PostItemProps> = function ({
    title,
    date,
    categories,
    summary,
    thumbnail: { 
        childImageSharp: { gatsbyImageData }, 
    },
    link,
}) {
    return (
        <PostItemWrapper to={link}>
            <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
    
            <PostItemContent>
                <Title>{title}</Title>
                <Summary>{summary}</Summary>
                <Date>{date}</Date>
                
                <Category>
                    {categories.map(category => (
                        <CategoryItem key={category}>{category}</CategoryItem>
                    ))}
                </Category>
                
            </PostItemContent>
        </PostItemWrapper>
    )
  }
  
  export default PostItem