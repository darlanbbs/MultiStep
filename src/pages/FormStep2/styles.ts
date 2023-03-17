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
export const Cards = styled.div`
  display: flex;
  height: 30%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom:15px;
  @media ${device.laptop} {
    gap: 30px;
    height: 40%;
    flex-direction: column;
  }
`;

export const Card = styled.div<{ selected: boolean }>`
  width: 130px;
  height: 180px;
  border: solid 1px
    ${(props) => (props.selected ? "#BD51F8" : "rgba(136, 139, 155, 0.7)")};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #f8f9fe;
    border: solid 2px purple;
  }
  @media ${device.laptop} {
    width: 300px;
    height: 150px;
  }
  @media ${device.phone} {
    width: 250px;

  }
`;

export const cardItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  height: 100%;
  margin: 5px 0 0 9px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const cartItemTexts = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  text-align: start;

  @media ${device.laptop} {
    text-align: center;
    flex-direction: row;
    gap: 20px;
  }
  @media ${device.phone} {
    gap: 1px;
  }
`;
export const cartItemTitle = styled.p`
  color: #03295a;
  margin: 0;
  font-weight: 700;
  font-size: 14px;
`;

export const cartItemText = styled.p`
  margin: 0;
  color: #999f;
  font-weight: 100;
  font-size: 12px;
`;

export const cartItemTextY = styled.p`
  color: #03295a;
  font-weight: 400;
  font-size: 15px;
`;
export const switchArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background: rgba(136, 139, 155, 0.2);
  filter: grayscale(0.2);
  gap: 25px;
`;
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 65px;
  height: 38px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    border-radius: 34px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #03295a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  span:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: #03295a;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  @media ${device.laptop} {
    margin:20px;
  }
`;

export const MontlyorYearly = styled.p<{ checked: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.checked ? "#999f" : "#03295a")};
  font-weight: 700;
  margin: 0;
`;
