<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Ormor-Gatsby-Blog Dev Project
</h1>

Gatsby 기반 커스텀 블로그 개발 프로젝트입니다. <br>
추후 템플릿화하여 오픈소스로 공유하는 것까지가 최종 목표입니다.

## 🚀 구현된 기능

<br>

## 🧐 프로젝트 톺아보기

해당 프로젝트의 디렉터리 구조는 다음과 같습니다.

    .
    ├── contents
    ├── node_modules
    ├── src
    ⎪   ├─ components
    ⎪   ⎪  ├─ Common
    ⎪   ⎪  ├─ Main
    ⎪   ⎪  ├─ Post
    ⎪   ⎪  ├─ header.js
    ⎪   ⎪  ├─ index.module.css
    ⎪   ⎪  ├─ layout.css
    ⎪   ⎪  ├─ layout.js
    ⎪   ⎪  └─ seo.js
    ⎪   ├─ hooks
    ⎪   ├─ images
    ⎪   ├─ pages
    ⎪   ├─ templates
    ⎪   └─ types
    ├── static
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

1.  **`/contents`**: 블로그 포스트, 이미지, 데이터 파일 등 실제 콘텐츠를 저장하는 곳입니다.

2.  **`/node_modules`**: npm 또는 yarn을 통해 설치된 모든 의존성(라이브러리)들이 저장되는 곳입니다.

3.  **`/src`**: 소스 코드를 포함하는 주요 디렉토리(React 컴포넌트, 페이지, 스타일 등)입니다.

- **`/src/components`**: 재사용 가능한 UI 컴포넌트들을 저장합니다.

  - **`/src/components/Common`**: 사이트 전반에 걸쳐 공통으로 사용되는 컴포넌트들
  - **`/src/components/Main`**: 메인 페이지에서 사용되는 컴포넌트들
  - **`/src/components/Post`**: 블로그 포스트 페이지에서 사용되는 컴포넌트들
  - **`/src/components/..`**: (기타파일 들)사이트의 레이아웃이나 SEO 설정에 사용

- **`/src/hooks`**: 커스텀 React 훅 파일들을 저장(무한스크롤 기능 등)합니다.

- **`/src/images`**: 정적 이미지 파일들을 저장합니다.

- **`/src/pages`**: 각각의 페이지 컴포넌트를 저장합니다. Gatsby는 이 디렉토리 내의 파일 이름을 기반으로 라우팅을 생성합니다.

- **`/src/templates`**: 다이나믹한 페이지 생성을 위한 템플릿 파일들을 저장합니다.

- **`/src/types`**: TypeScript 인터페이스나 타입 정의 파일들을 저장합니다.

4. **`/static`**: 빌드 시에 `/public` 디렉토리로 복사되는 정적 파일들을 저장합니다.

5. **`/.eslintignore`**, **`/.eslintrc.json`**: ESLint 설정 파일들로, 코드 품질과 일관성을 유지하기 위한 린팅 규칙을 정의합니다.

6. **`/.gitignore`**: Git 버전 관리에서 무시할 파일 목록을 정의합니다.

7. **`/.prettierignore`**, **`/.prettierrc`**: Prettier 설정 파일들로, 코드 포매팅 규칙을 정의합니다.

8. **`gatsby-browser.js`**: 이 파일은 Gatsby가 [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (가 있는 경우) 모든 사용법을 찾을 수 있는 곳입니다. 이를 통해 브라우저에 영향을 미치는 기본 Gatsby 설정을 커스터마이징, 확장할 수 있습니다.

9. **`gatsby-config.js`**: Gatsby 사이트의 기본 구성 파일입니다. 여기에서 사이트 제목과 설명, 포함할 개츠비 플러그인 등 사이트에 대한 정보(메타데이터)를 지정할 수 있습니다. (자세한 내용은 [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) 를 참조하세요).

10. **`gatsby-node.js`**: 이 파일은 Gatsby가 [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (가 있는 경우) 모든 사용법을 찾는 곳입니다. 데이터 소스 연결, 다이나믹 페이지 생성 등의 작업을 여기서 처리합니다.

11. **`gatsby-ssr.js`**: 이 파일은 Gatsby가 [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (가 있는 경우) 서버 사이드 렌더링을 위한 Gatsby API를 사용하기 위한 파일입니다.

12. **`LICENSE`**: 이 개츠비 스타터는 0BSD 라이선스에 따라 라이선스가 부여됩니다. 즉, 이 파일을 플레이스홀더로 보고 자신의 라이선스로 대체할 수 있습니다.

13. **`package-lock.json`**, **`yarn.lock`**: 프로젝트 의존성의 정확한 버전을 잠그기 위해 사용되는 파일입니다. npm과 yarn 각각에 대응됩니다.

14. **`package.json`**: 프로젝트 메타데이터와 의존성 리스트를 포함하는 파일입니다. 스크립트 실행 방법도 정의할 수 있습니다. 메타데이터(프로젝트의 이름, 작성자 등)를 포함하는 Node.js 프로젝트의 매니페스트 파일입니다. 이 매니페스트는 npm이 프로젝트에 설치할 패키지를 파악하는 방법입니다.

15. **`tsconfig.json`**: TypeScript 컴파일러 옵션을 설정하는 파일입니다.

<br>

## 🎓 Gatsby 더 알아보기

더 자세한 안내가 필요하다면, [Gatsby 웹사이트](https://www.gatsbyjs.com/)에서 공식 문서를 확인하세요. 아래에 참고하기 좋은 URL을 첨부합니다.

- **대부분의 개발자에게는 [Gatsby 사이트를 만들기 위한 심층 튜토리얼](https://www.gatsbyjs.com/docs/tutorial/getting-started/)부터 시작하는 것을 권장합니다.** 이 튜토리얼은 사용자의 수준에 대한 특정 기준 없이 모든 절차에 대해서 소개합니다.

- **예시 코드를 살펴보려면 [Gatsby 공식 문서](https://www.gatsbyjs.com/docs/) 를 확인하세요.** 특히, 사이드바에서 _Guides_, _API Reference_, 그리고 _Advanced Tutorials_ 섹션을 확인해보세요.

<!-- AUTO-GENERATED-CONTENT:END -->
