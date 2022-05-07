import styled from "styled-components"
import { Device, Colors, Fonts } from "../js/constants"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding: 7px 5px;
  z-index: 100;
  background: #FFFFFF;
  border-bottom: 1px solid ${Colors.navigationBorderBottom};
  white-space: nowrap;
  height: 2.8em;
 
  

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  }

  h1 {
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 1.1em;
    font-weight: 700;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-right: 15px;
    padding-left: 0;
    
  }
  li a {
    display: inline-block;
    text-decoration: none;
    color: ${Colors.navigationLink};
    font-size: 0.7em;
    padding: 8px 0px 4px 11px;
  }

  @media ${Device.mobileL} {
    h1 {
      font-size: 1.2em;
    }
    li a {
      font-size: 1em;
    }
  }

  @media ${Device.tablet} {
    li a {
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media ${Device.tabletM} {
    padding-right: 11rem;
    padding-left: 11rem;
  }

  /* @media ${Device.laptop} {
    padding-right: 15rem;
    padding-left: 15rem;

    h1 {
      font-size: 1.3em;
    }
  }

  @media ${Device.laptopL} {
    padding-right: 400px;
    padding-left: 400px;

    li a {
      padding-right: 18px;
      padding-left: 18px;
    }
  }

  @media ${Device.desktop} {
    padding-right: 45rem;
    padding-left: 45rem;
  }

  @media ${Device.desktopL} {
    padding-right: 57rem;
    padding-left: 57rem;
  } */
`
