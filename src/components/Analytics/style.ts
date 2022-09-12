import styled from "styled-components";
import { colors } from "../../utils/theme";

const { hoverText, textColor, sectionColor } = colors;

export const Section = styled.div`
    width: 75%;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    left: 19vw;
    top: 85px;

    .analytic {
        padding: 2.2rem 2rem 2.2rem 2rem;
        border-radius: 0.25rem;
        background-color: ${sectionColor};
        color: ${textColor};


        /* padding: 1rem; */
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        /* gap: 1rem; */
        transition: all .5s ease-in-out;
        text-align: left;
        .content {
            display: flex;
            justify-content: space-between;
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
                    margin-right: .9rem;
                }
                span {
                    color: #00d25b;
                }
            }
        }
        h3 {
            text-align: start;
        }
    }
`