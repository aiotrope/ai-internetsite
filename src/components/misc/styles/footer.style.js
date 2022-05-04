import styled from "styled-components"
import { Device } from "../../../static/js/constants"

export const Footer = styled.footer`
  padding: 0.01em 10px;
  bottom: 0;
  width: 100%;
  

  footer:before,
  footer:after {
    content: "";
    display: table;
    clear: both;
  }

  @media ${Device.tabletM} {
    margin: 0 auto;
    width: 72%;
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
