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
        <C.Circles active={active}>{number}</C.Circles>
      </Link>
     
    </C.Container>
  );
};

export default SideBarM;
