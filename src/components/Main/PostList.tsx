import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
    useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'


export type PostType = {
    node: {
      id: string
        frontmatter: {
            title: string
            summary: string
            date: string
            categories: string[]
            thumbnail: {
                publicURL: string
            }
        }
    }
}

// PostList 컴포넌트의 프롭 타입 정의
type PostListProps = {
    selectedCategory: string
    posts: PostListItemType[]
}

// 포스트 리스트 래퍼 스타일 컴포넌트
const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; // 2열 그리드
    grid-gap: 20px;                 // 그리드 간격
    width: 768px;
    margin: 0 auto;                 // 중앙 정렬
    padding: 50px 0 100px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; // 모바일에서는 1열 그리드
        width: 100%;
        padding: 50px 20px;
    }
`

// PostList 컴포넌트 정의
const PostList: FunctionComponent<PostListProps> = function ({
    selectedCategory,
    posts,
}) {
    // 무한 스크롤 훅 사용하여 컨테이너 참조 및 포스트 리스트 가져오기
    const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
        selectedCategory,
        posts,
    )
    // 렌더링 부분
    return (
        <PostListWrapper ref={containerRef}>
            {postList.map(
                ({
                    node: {
                        id,
                        fields: { slug },
                        frontmatter,
                    },
                }: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug} key={id} />
                ),
            )}
        </PostListWrapper>
    )
}

export default PostList
