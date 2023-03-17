import React from "react";
import { Link } from "react-router-dom";
import * as C from "./style";

type Props = {
  number: number;
  path: string;
  descriptions?: string;
  active: boolean;
  step: string;
};

const SideBar = ({ number, path, descriptions, active, step }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Circles active={active}>{number}</C.Circles>
      </Link>
      <C.DescriptionArea>
        <C.Step>{step}</C.Step>
        <C.Description>{descriptions}</C.Description>
      </C.DescriptionArea>
    </C.Container>
  );
};

export default SideBar;
