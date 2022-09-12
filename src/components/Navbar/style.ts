import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const { textColor, sectionColor, hoverText, buttonColor } = colors;

interface INavLink {
    isActive: boolean
}


export const Container = styled.div`
    height: 75px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${sectionColor};
    box-shadow: 0px 10px 20px 0px rgba(8, 0, 42, 0.08);
    z-index: 999;
`;
export const Wrapper = styled.div`
    width: 95%;
    /* max-width: 1300px; */
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`;
export const Logo = styled.div`
    margin-right: 6rem;


    a {
        text-decoration: none;

        h2 {
            font-size: 2.2rem;
            color: ${hoverText};
        }
    }
    
`;
export const NavLinks = styled.div`
    margin-right: 10px;

    .search {
        background-color: transparent;
        display: flex;
        align-items: center;
        padding: .8rem 8rem .8rem .8rem;
        gap: .8rem;
        border-radius: .8rem;
        border: 2px solid #2c2e33;
    }
    svg {
        color: #434a54;
    }
    input {
        background-color: transparent;
        color: #434a54;
        border: none;
        letter-spacing: .3rem;

        ::placeholder {
            color: #434a54;
        }

        :focus {
            outline: none;
        }
    }
`;

export const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 4rem; */


`;
// export const NavLink = styled(Link)`
//     color: ${(props: INavLink) => props.isActive ?  primaryColor : textColor };
//     transition: 0.5s linear;
//     :hover {
//         color: ${primaryColor};
//     }
//     margin-right: 20px;
// `;

export const AuthLink = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    ul {
        display: flex;
        align-items: center;
        li {
            list-style: none;
    
            a  {
                position: relative;
                :hover {
                    cursor: pointer;
                }
            }
        }
        .message {
            border-right: 1px solid ${textColor};
            border-left: 1px solid ${textColor};
            margin: 0 .5rem;
            padding: 0 .5rem;
            a {
                svg {
                    color: ${textColor};
                    font-size: 18px;
                }
            }
            span {
                position: absolute;
                left: 66%;
                width: 7px;
                height: 7px;
                color: #ffffff;
                border-radius: 100%;
                text-align: center;
                font-size: .625rem;
                line-height: 1.5;
                top: -2px;
                background-color: #fc424a !important;
            }
        }
        .notification {
            a {
                svg {
                    font-size: 18px;
                }
                span {
                    position: absolute;
                    left: 65%;
                    width: 7px;
                    height: 7px;
                    color: #ffffff;
                    border-radius: 100%;
                    text-align: center;
                    font-size: .625rem;
                    line-height: 1.5;
                    top: -3px;
                    background-color: #00d25b !important;
                }
            }
        }
    }
    button {
        background: ${buttonColor};
        color: white;
        padding: .5rem .8rem;
        margin-left: 20px;
        border-radius: 6px;
        border: none;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: .38px;
        cursor: pointer;
    }
    svg {
        color: ${textColor};
        margin: 0 .7rem;
        font-size: 18px;
    }
`

export const Profile = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        width: 35px;
        height: 35px;
        border-radius: 50% !important;
    }
    p {
        margin-left: 1rem;
        font-size: .875rem;
        color: ${textColor};
    }
    svg {
        color: ${textColor};
        margin-left: 1rem;
    }
`
