import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        background-color: rgba(20,20,20,1);
        color: white;
        padding-top: 70px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`