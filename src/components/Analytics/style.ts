import styled from "styled-components";
import { cardStyle } from '../ReusableStyles';
import { colors } from "../../utils/theme";

const { textColor, sectionColor } = colors;

export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    .analytic {
        ${cardStyle};
        padding: 1rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: all .5s ease-in-out;

        padding: 1rem 2rem 3rem 2rem;
    border-radius: 1rem;
    background-color: ${sectionColor};
    color: ${textColor};
    }
`