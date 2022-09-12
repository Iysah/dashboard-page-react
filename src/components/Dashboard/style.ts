import styled from "styled-components";

export const Section = styled.section`
    .grid {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        .row-two {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    }
`