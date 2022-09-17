import styled from "styled-components";

export const Section = styled.section`
    margin-left: 18vw;
    padding: 1rem;
    height: 100%;

    position: relative;

    .grid {
        display: flex;
        flex-direction: column;
        height: 100%;

        gap: 1rem;
        margin-top: 1rem;

        .double {
            gap: 1rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .single {
            margin-top: 3rem;
        }
    }
`