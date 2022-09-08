import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/theme";

interface INavLink {
    isActive: boolean
}

const { primaryColor, textColor } = colors;

export const Container = styled.div`
    height: 75px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: white;
    box-shadow: 0px 10px 20px 0px rgba(8, 0, 42, 0.08);
    z-index: 999;
`;
export const Wrapper = styled.div`
    width: 95%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`;
export const Logo = styled.div`
    img {
        height: 50px;
    }
    
`;
export const NavLinks = styled.div`
    margin-right: 10px;
`;
export const NavLink = styled(Link)`
    color: ${(props: INavLink) => props.isActive ?  primaryColor : textColor };
    transition: 0.5s linear;
    :hover {
        color: ${primaryColor};
    }
    margin-right: 20px;
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
`;
export const AuthLink = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0; 
        height: 100%;
        width: 2px;
        border-radius: 4px;
        background: ${textColor};
        opacity: 0.3;
    }
    a {
        color: ${textColor};
        transition: 0.5s linear;
        display: inline-flex;
        align-items: center;
        svg {
            font-size: 18px;
            margin: 0 10px;
        }
        :hover {
            color: ${primaryColor};
        }
    }
    button {
        background: ${primaryColor};
        color: white;
        border: none;
        padding: 15px 30px;
        margin-left: 20px;
        border-radius: 6px;
        border: none;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    }
`;
