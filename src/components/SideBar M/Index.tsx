import React from "react";
import { Link } from "react-router-dom";
import * as C from "./style";

type Props = {
  number: number;
  path: string;
  active: boolean;

};

const SideBarM = ({ number, path,  active }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.circles active={active}>{number}</C.circles>
      </Link>
     
    </C.Container>
  );
};

export default SideBarM;
