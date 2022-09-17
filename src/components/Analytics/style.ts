import styled from "styled-components";
import { colors } from "../../utils/theme";

const { hoverText, textColor, sectionColor } = colors;

export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    position: absolute;

    .analytic {
        padding: 1.2rem 1rem 1.2rem 1rem;
        border-radius: 0.25rem;
        background-color: ${sectionColor};
        color: ${textColor};

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        transition: all .5s ease-in-out;
        text-align: left;
        .content {
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            align-items: center;
            .icon {
                background-color: rgba(0,210,91,.2);
                width: 40px;
                height: 40px;
                border-radius: 3px;
                display: flex;
                svg {
                    margin: auto;
                    color: #00d25b;
                    font-size: 18px;
                }
            }
            .red {
                background-color: rgba(252,66,74, .2);
                width: 40px;
                height: 40px;
                border-radius: 3px;
                display: flex;
                svg {
                    margin: auto;
                    color: #fc424a;
                }
            }
            .rate {
                display: flex;
                align-items: center;
                padding: .2rem;
                margin-bottom: 1rem;
                margin-right: 4rem;
                h2 {
                    color: ${hoverText};
                    margin-right: .5rem;
                    font-size: 24px;
                }
                span {
                    color: #00d25b;
                    font-size: 12px;
                    align-self: flex-start;
                }
                .red-text {
                    color: #fc424a;
                }
            }
        }
        h3 {
            text-align: start;
            align-self: start;
            color: ${hoverText};
            font-size: 18px;
            text-transform: capitalize;
            font-weight: 500;
        }
    }
`