//react

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//styles

import * as C from "./style";
import * as D from "./../GlobalItens/StyleGlobalForm";
import Theme from "../../components/Theme/Index";
//context

import { formActions, useForm } from "../../context/FormContext";

//components

import Card from "./Card";
import Buttons from "../GlobalItens/Buttons";
import Title from "../GlobalItens/Title";
import Switch from "./Switch";

const Page2 = () => {
  const [confirm, setConfirm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const { dispatch, state, formData } = useForm();

  useEffect(() => {
    if (isChecked) {
      setType("Yearly");
    } else {
      setType("Monthly");
    }
  }, [isChecked]);

  useEffect(() => {
    if (formData !== undefined) {
      dispatch({
        type: formActions.setCurrentStep,
        payload: 2,
      });
    } else {
      navigate("/");
    }
  }, []);

  const handleNextStep = () => {
    if (state.plan != undefined) {
      setConfirm(true);
    }
  };
  if (confirm) {
    navigate("/services");
  }
  const setPlan = (plan: string) => {
    dispatch({ type: formActions.setPlan, payload: plan });
  };
  const setType = (type: string) => {
    dispatch({ type: formActions.setType, payload: type });
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const setPrice = (price: string) => {
    dispatch({ type: formActions.setPrice, payload: price });
  };

  const price1 = state.type === "Yearly" ? "$90/yr" : "$09/mo";
  const price2 = state.type === "Yearly" ? "$120/yr" : "$12/mo";
  const price3 = state.type === "Yearly" ? "$150/yr" : "$15/mo";

  return (
    <Theme>
      <C.Container>
        <Title
          title={"Select your plan"}
          subTitle={"You have the option of monthly or yearly billing."}
        />
        <C.Cards>
          <Card
            selected={state.plan === "Arcade"}
            onClick={() => {
              setPrice(price1);
              setPlan("Arcade");
            }}
            price={price1}
            title={"Arcade"}
            bonus={isChecked ? "2 Months Free" : ""}
            img={"/icon-arcade.svg"}
            alt={"arcade"}
          />
          <Card
            selected={state.plan === "Advanced"}
            onClick={() => {
              setPrice(price2);
              setPlan("Advanced");
            }}
            title={"Advanced"}
            price={price2}
            bonus={isChecked ? "2 Months Free" : ""}
            img={"/icon-advanced.svg"}
            alt={"advanced"}
          />
          <Card
            selected={state.plan === "Pro"}
            onClick={() => {
              setPrice(price3);
              setPlan("Pro");
            }}
            title={"Pro"}
            price={price3}
            bonus={isChecked ? "2 Months Free" : ""}
            img={"/icon-pro.svg"}
            alt={"pro"}
          />
        </C.Cards>
        <C.switchArea>
          <Switch
            checked={isChecked}
            Monthly={"Monthly"}
            Yearly={"Yearly"}
            onChange={handleToggle}
          />
        </C.switchArea>

        <D.NextPreviousButton>
          <D.previousButton onClick={() => navigate('/')}>
            Previous
          </D.previousButton>
          <D.nextButton type="submit" onClick={() => navigate('/services')}>Next</D.nextButton>
        </D.NextPreviousButton>
      </C.Container>
    </Theme>
  );
};

export default Page2;
