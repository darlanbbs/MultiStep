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
        <C.circles active={active}>{number}</C.circles>
      </Link>
      <C.descriptionArea>
        <C.step>{step}</C.step>
        <C.description>{descriptions}</C.description>
      </C.descriptionArea>
    </C.Container>
  );
};

export default SideBar;
