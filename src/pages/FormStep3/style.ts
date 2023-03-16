import styled from "styled-components";
import { device } from "../GlobalItens/StyleGlobalForm";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  @media ${device.laptop} {
    text-align: center;

  }
`;
export const Form = styled.form`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap:20px;
  height:70%;
  width: 100%;
`;

export const checkArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;

  border: solid 2px;
  
  
  width: 30vw;
  @media ${device.laptop} {

    width: 40vw;
    
  }
  @media ${device.phone} {
    width: 60vw;

  }
  height: 90px;
  

`;
export const bothSide = styled.div`
  display: flex;
  text-align: start;
  justify-content: space-between;
  margin: 10px;
  width: 90%;
  gap: 15px;
`;
export const titleArea = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  flex-direction: column;
  
`;
export const rightSide = styled.div`
  text-align: flex-start;
  display: flex;
  align-items: center;
`;
export const leftSide = styled.div`
  text-align: flex-start;
  display: flex;
  align-items: center;
`;

export const title = styled.p`
  font-weight: bold;
  margin: 0;
  color: #03295a;
  font-size: 15px;
  @media ${device.phone} {
    font-size: 13px;

  }
`;

export const text = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  color: #999;
  @media ${device.laptop} {
    font-size: 10px;
  }
`;

export const price = styled.p`
  color: #bd51f8;
  font-weight: 400;
`;

export const Checkbox = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  
`;
