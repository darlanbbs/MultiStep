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

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  @media ${device.laptop} {
    align-items: center;
    
  }
`;
export const titleLocal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const nameLabel = styled.p`
  font-weight: 700;
  color: #03295a;
  font-size: 18px;
  margin: 0;
  @media ${device.phone} {
    font-size: 13px;

  }
`;
export const errorLabel = styled.p`
  font-weight: 700;
  color: red;
  font-size: 18px;
  margin: 0;
  @media ${device.phone} {
    font-size: 13px;
    font-weight: 400;

  }
`;

export const Form = styled.form`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  width: 100%;
  gap: 30px;


`;

export const Input = styled.input`
  width: 90%;
  padding: 11px 10px;
  border-radius: 10px;
  border: solid 1px rgba(136, 139, 155, 0.6);
  color: #03295a;
  font-weight: 700;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 500;
  }
  :-ms-input-placeholder {
    font-weight: 500;
  }
  &:focus-visible {
    outline: 2px solid #03295a;
    border-radius: 3px;
  }
  @media ${device.phone} {
    padding: 12px 10px;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  max-width: 10rem;

  color: #ffffff;
  background-color: #333333;
`;
