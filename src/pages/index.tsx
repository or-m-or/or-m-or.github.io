/* 메인 페이지 레이아웃, 컴포넌트 정의 */
import React, { FunctionComponent, useMemo } from 'react'
// import styled from '@emotion/styled'                    // 스타일 컴포넌트 라이브러리
// import GlobalStyle from 'components/Common/GlobalStyle' // 글로벌 스타일 정의
// import Footer from 'components/Common/Footer'           // Footer 컴포넌트
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList' // 카테고리 리스트 컴포넌트
import Introduction from 'components/Main/Introduction'       // 소개 섹션 컴포넌트
import PostList, { PostType } from 'components/Main/PostList' // 포스트 리스트 컴포넌트
import { graphql } from 'gatsby'                              // Gatsby의 GraphQL 쿼리 라이브러리
import { IGatsbyImageData } from 'gatsby-plugin-image'        // 이미지 데이터 타입
import { PostListItemType } from 'types/PostItem.types'       // 포스트 리스트 아이템 타입 정의
import queryString, { ParsedQuery} from 'query-string'        // URL 쿼리 문자열 파싱 라이브러리
import Template from 'components/Common/Template'             // 템플릿 컴포넌트


// IndexPage 컴포넌트의 Prop 타입 정의
type IndexPageProps = {
    // location : 현재 페이지의 URL 정보
    location: {
        search: string
    }
    // data : 현재 페이지의 데이터(GraphQL 쿼리 결과)
    data: {
        // 사이트 메타데이터
        site: {
          siteMetadata: {
            title: string
            description: string
            siteUrl: string
          }
        }
        // 마크다운으로 작성된 포스트 목록
        allMarkdownRemark: {
            edges: PostListItemType[]
        }
        // 프로필 이미지 파일 정보
        file: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData
            }
            publicURL: string // 파일 공개 URL, 이미지 파일 직접 접근용
        }
    }
}

// IndexPage 컴포넌트 선언 (웹 페이지의 주요 레이아웃과 기능)
const IndexPage: FunctionComponent<IndexPageProps> = function ({
    // location 객체를 통해 현재 페이지의 URL 쿼리 스트링 접근
    location: { search },
    // data 객체를 통해 GraphQL 쿼리로 불러온 데이터 접근
    data: {
        site: {
            siteMetadata: { title, description, siteUrl },
        },
        allMarkdownRemark: { edges },
        file: {
            childImageSharp: { gatsbyImageData },
            publicURL,
      },
    },
}) {
    // queryString을 사용하여 URL의 쿼리 스트링 파싱
    const parsed: ParsedQuery<string> = queryString.parse(search)
    // 선택된 카테고리 파싱, default : 'All'
    const selectedCategory: string =
        typeof parsed.category !== 'string' || !parsed.category
        ? 'All'
        : parsed.category

    // useMemo 훅을 사용하여 카테고리 리스트를 메모리에 저장하고 성능 최적화
    const categoryList = useMemo(
        () => // 카테고리 리스트 계산 로직
            edges.reduce(
                (
                    list: CategoryListProps['categoryList'],
                    {
                        node: {
                            frontmatter: { categories },
                        },
                    }: PostType,
                ) => {
                    categories.forEach(category => {
                        if (list[category] === undefined) list[category] = 1;
                        else list[category]++;
                    });
        
                    list['All']++;
        
                    return list;
                },
                { All: 0 },
            ),
        [],
    )

    // 페이지의 주요 구성 요소 렌더링
    return (
        <Template
            title={title}
            description={description}
            url={siteUrl}
            image={publicURL}
        >
            <Introduction profileImage={gatsbyImageData} />
            <CategoryList
                selectedCategory={selectedCategory}
                categoryList={categoryList}
            />
            <PostList selectedCategory={selectedCategory} posts={edges} />
        </Template>
      )
    }

export default IndexPage

// GraphQL 쿼리를 정의
export const getPostList = graphql`
    query getPostList {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        summary
                        date(formatString: "YYYY.MM.DD.")
                        categories
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData(width: 768, height: 400)
                            }
                        }
                    }
                }
            }
        }
        file(name: { eq: "profile-image" }) {
            childImageSharp {
                gatsbyImageData(width: 120, height: 120)
            }
            publicURL
        }
    }
`;