//react

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//context
import { formActions, useForm } from "../../context/FormContext";

//components
import Card from "./Card";
import Title from "../GlobalItens/Title";

//styles
import * as C from "./styles";

import Theme from "../../components/Theme/Index";

const Page3 = () => {

  const { dispatch, state, formData } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (formData !== undefined) {
      dispatch({
        type: formActions.setCurrentStep,
        payload: 3,
      });
    } else {
      navigate("/");
    }
  }, []);
  
console.log(state.plan)
console.log(state.price)


  const price1 = state.type === "Yearly" ? "$10/yr" : "$01/mo";
  const price2 = state.type === "Yearly" ? "$20/yr" : "$02/mo";

  return (
    <Theme>
      <C.Container>
        <Title
          title={"Pick add-ons"}
          subTitle={"Add-ons help enhance your gaming experience."}
        />
        <Card price1={price1} price2={price2} />
      </C.Container>
    </Theme>
  );
};

export default Page3;
