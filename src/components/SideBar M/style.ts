import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const circles = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: solid 3px black;
  font-size: 18px;
  font-weight: bold;
`;
