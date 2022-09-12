import { css } from "styled-components";
import { colors } from "../utils/theme";

const { textColor, sectionColor } = colors;

export const cardStyle = css`
    padding: 1rem 2rem 3rem 2rem;
    border-radius: 1rem;
    background-color: ${sectionColor};
    color: ${textColor};
`