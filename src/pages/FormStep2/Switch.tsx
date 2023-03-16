import React from "react";
import * as C from "./style";
type Props = {
  Monthly: string;
  Yearly: string;
  checked: boolean;
  onChange: () => void;
};

const Switch = ({ Monthly, Yearly, checked, onChange }: Props) => {
  return (
    <>
      <C.MontlyorYearly checked={checked}>{Monthly}</C.MontlyorYearly>
      <C.Switch>
        <input type="checkbox" onChange={onChange} />
        <span></span>
      </C.Switch>

      <C.MontlyorYearly checked={!checked}>{Yearly}</C.MontlyorYearly>
    </>
  );
};

export default Switch;
