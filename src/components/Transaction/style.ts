import styled from "styled-components";
import { colors } from "../../utils/theme";

const { hoverText, textColor, sectionColor } = colors;

export const Section = styled.section`
    padding: 2.2rem 2rem 2.2rem 2rem;
    border-radius: 0.25rem;
    background-color: ${sectionColor};
    color: ${textColor};

    position: absolute;

    h4 {
        color: ${textColor};
        margin-bottom: 1.125rem;
        text-transform: capitalize;
    }
    .history {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 3rem;

    .pie-chart {
        margin: 0 auto;
        width: 100px;
        height: 100px;
    }
    h1 {
        color: ${textColor};
        font-size: 30px;
        font-weight: 700;
        letter-spacing: .2px;

        span {
            color: ${hoverText};
            font-weight: 300;
        }
    }
`
export const Bottom = styled.div`
    h4 {
        color: ${textColor};
        margin-bottom: 1.125rem;
        text-transform: capitalize;
    }
`

export const Earnings = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.2rem 2rem 2.2rem 2rem;
    border-radius: 0.25rem;
    background-color: ${sectionColor};
    color: ${textColor};

    .detail {
        h3 {
            color: ${textColor};
        }
        span {
            color: ${hoverText};
        }
    }

    .amount {
        h6 {
            font-weight: 700;
        }
    }

`