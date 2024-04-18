/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` }),
  setHeadComponents([
    <link
    key="Pacifico"
    href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=IBM+Plex+Sans+KR&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100..900&family=Pacifico&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
    rel="stylesheet"
    />,
  ]);
}