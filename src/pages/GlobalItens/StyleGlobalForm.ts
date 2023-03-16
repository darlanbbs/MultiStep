import styled from "styled-components";

const size = {
  phone: "550px",
  laptop: "1534px",
  desktop: "2560px",
};

export const device = {
  phone: `(max-width: ${size.phone})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const Title = styled.div`
  display: flex;
  margin:0;
  flex-direction: column;
  @media ${device.laptop} {
    text-align: center;
  }
`;

export const titleText = styled.h2`
  color: #03295a;
  font-weight: bold;
  font-size: 30px;
  @media ${device.laptop} {
    font-size: 23px;
  }
`;

export const subText = styled.p`
  color: #999;
  font-weight: 300;
  font-size: 20px;
  @media ${device.laptop} {
    font-size: 18px;
  }
`;

export const NextPreviousButton = styled.div`
height: 25%;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: space-between;
@media ${device.laptop} {
  gap: 10px;
}

`;
export const nextButton = styled.button`
  padding: 13px 40px;
  border-radius: 15px;
  background-color: #03295a;
  color: #fff;
  font-weight: bold;
  transition: all 0.7s;
  &:hover {
    background: RGBA(186, 117, 237, 0.5);
  }
`;

export const previousButton = styled.button`
  padding: 13px 40px;
  border-radius: 15px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  border: 1px solid #000;
  transition: all 0.5s;
  &:hover {
    background: #03295a;

    color: #fff;
  }
`;

export const onlyButton = styled.div`
  justifyContent: flex-end;
  width: 100%;
  height: 10%;
  @media ${device.laptop} {
    justify-content:center
  }
};
`;
