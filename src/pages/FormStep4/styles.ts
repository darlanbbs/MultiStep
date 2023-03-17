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
    flex-wrap: wrap;

  }
`;
export const result = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

height:45vh;
width:100%;
@media ${device.phone} {
  width:70%;


}

`
export const finalArea = styled.div`
  width: 400px;

  background: rgba(136, 139, 155, 0.2);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const finalAreaItens = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding:8px;
  @media ${device.laptop} {
    width: 75%;
  }
`;
export const firstItem = styled.p`
  color: #03295a;
  font-weight: 700;
`;

export const Itens = styled.p`
  color: #999f;
  font-weight: 500;
  font-size: 15px;
`;
export const hr = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: #999f;
  height: 1px;
`;

export const resultArea = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const serviceResult = styled.p`
  font-weight: bold;
  color: #03295a;
`;
