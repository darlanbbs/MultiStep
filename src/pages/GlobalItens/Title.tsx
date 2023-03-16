import React from "react";
import * as D from "../GlobalItens/StyleGlobalForm";

type Props = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: Props) => {
  return (
    <>
      <D.Title>
        <D.titleText>{title}</D.titleText>
        <D.subText>{subTitle}</D.subText>
      </D.Title>
    </>
  );
};

export default Title;
