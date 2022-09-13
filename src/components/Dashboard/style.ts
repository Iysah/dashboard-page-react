import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    top: 75px;
    left: 0;

    .grid {
        width: 75%;
        left: 19vw;

        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        .row-two {
            position: relative;
            width: 100%;
            gap: 1rem;
            margin-top: 3rem;
            margin: 0 1rem;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .row-one {
            width: 100%;
            position: relative;
        }
    }
`