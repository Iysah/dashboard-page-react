import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const { textColor, sectionColor, hoverText } = colors;

export const Wrapper = styled.section`
  position: fixed;
  top: 75px;
  left: 0;
  background-color: ${sectionColor};
  width: 18vw;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: column;
  padding: 2rem 0;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #606063;

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .7rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #606063;

      h2 {
        font-size: 2.2rem;
        color: ${hoverText};
      }
    }
    .toggle {
      display: none;
    }
    .links {
      display: flex;
      justify-content: center;

      ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;

          :hover {
            background-color: #363740;
            transition: all 0.25s ease-in-out;

            a {
              color: ${hoverText};
            }
          }

          
          a {
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            gap: 1rem;
            color: ${textColor};
          }
        }
        .active {
          background-color: #363740a4;
          a {
            color: ${hoverText};
          }
        }
      }
    }
  }

  .bottom {

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
  
        :hover {
          background-color: #363740;
          transition: all 0.25s ease-in-out;

          a {
            color: ${hoverText};
          }
        }
        
        a {
          text-decoration: none;
          display: flex;
          justify-content: flex-start;
          gap: 1rem;
          color: ${textColor};
        }
      }    
    }
  }
  
`