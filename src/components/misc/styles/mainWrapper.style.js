import styled from "styled-components"
import { Device } from "../../../static/js/constants"



export const Wrapper = styled.main`
  padding: 0.01em 10px;
  overflow: hidden;
  position: relative;
 /*  min-height: 100vh; */
  width: 100%;
 
  section {
    margin-top: 3rem;
  }

  main:before,
  main:after {
    content: "";
    display: table;
    clear: both;
  } 

  @media ${Device.tabletM} {
    margin: 0 auto;
    width: 73%;
    padding-right: 30px;

    section {
      margin-top: 7rem;
    }
  }

  @media ${Device.laptop} {
    width: 72%;
    padding-right: 30px;
  }

  @media ${Device.laptopL} {
    width: 45%;
  }

  @media ${Device.desktop} {
    width: 42%;
  }
  @media ${Device.desktopL} {
    width: 41%;
  } 
`
