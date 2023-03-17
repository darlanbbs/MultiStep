import styled from "styled-components";
import { device } from "../../pages/GlobalItens/StyleGlobalForm";

export const Container = styled.div`
  margin: 50px auto;
  background-color: #fff;
  color: #000;
  border-radius: 20px;
  width: 75%;
  max-height: 70vh;
  width: 52vw;
  min-height: 62vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptop} {
    justify-content: center;
    border-radius: 10px;
    width: 70vw;
    margin-top:90px;
  }
  @media ${device.phone} {
    height:95vh;
    width: 85vw;
  }

`;

export const Area = styled.div`
  height:70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Steps = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  height: 75vh;
  padding: 20px;

`;

export const Sidebar = styled.div`
  height: 82%;
  border-radius: 20px;
  
    background: url(/bg-sidebar-desktop.svg);

  }
  @media ${device.laptop} {
   display:none
  }
`;


export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height:100%;
  flex-direction: column;
  `;
  
export const step = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 30px;
  gap: 20px;
  
  @media ${device.laptop} {
    align-items: start;
    flex-direction: row;
  }
  
  
  `;

export const SidebarM = styled.div`
z-index:-1;
display:none;
  position: absolute;
  top:0px;
  height: 20%;
  width:100%;
    background: url(/bg-sidebar-mobile.svg) ;
    background-size: 100%;
  }
  @media ${device.laptop} {
   display:flex
   align-items: start;
   justify-content: center;

  }
`;
