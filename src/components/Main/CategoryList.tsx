import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


// CategoryItemProps 타입 정의: 카테고리가 활성 상태인지 표시
type CategoryItemProps = {
    active: boolean;
}


type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

// CategoryListProps 타입 정의: 선택된 카테고리와 목록 정보 포함
export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

// 카테고리 리스트 스타일 지정
const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 50px;
        padding: 0 20px;
    }
`

// 카테고리 아이템 스타일 지정
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
))<CategoryItemProps>`
    margin-right: 20px;  // 마진 조정
    padding: 10px 20px;  // 패딩 조정
    font-size: 18px;     // 글자 크기
    font-weight: ${({ active }) => (active ? '700' : '400')}; // 활성화 시 더 두꺼운 글자
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#f0f0f0' : 'white')}; // 활성화 시 배경색 변경
    border: 1px solid #ddd; // 경계선 추가
    border-radius: 0; // 경계선 둥글게 처리

    &:hover {
        background-color: #f7f7f7; // 호버 시 배경색 변경
    }

    &:last-of-type {
        margin-right: 0;
    }

    @media (max-width: 768px) {
        font-size: 15px; // 모바일에서의 글자 크기 조정
        padding: 8px 16px; // 모바일에서의 패딩 조정
    }
`

// margin-right: 20px;
// padding: 5px 0;
// font-size: 18px;
// font-weight: ${({ active }) => (active ? '800' : '400')};
// cursor: pointer;

// &:last-of-type {
//     margin-right: 0;
// }

// @media (max-width: 768px) {
//     font-size: 15px;
// }


// 
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
    return (
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count]) => (
                
                
                <CategoryItem
                    to={`/?category=${name}`}
                    active={name === selectedCategory}
                    key={name}
                >
                    {name} ({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList