import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//style
import * as C from "./style";
import * as D from "./../GlobalItens/StyleGlobalForm";
import Theme from "../../components/Theme/Index";

//context
import { formActions, useForm } from "../../context/FormContext";

//components
import Card from "./Card";

import Title from "../GlobalItens/Title";

const Page4 = () => {

  const navigate = useNavigate();
  const { dispatch, state } = useForm();

  useEffect(() => {
    if (state.type !== undefined) {
      dispatch({
        type: formActions.setCurrentStep,
        payload: 4,
      });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <Title
          title={"Finishing up"}
          subTitle={"Double-check everything looks OK before confirming."}
        />
        <Card
          title={state.plan}
          type={state.type}
          price={state.price}
          change={"/plans"}
        />
     
      </C.Container>
    </Theme>
  );
};

export default Page4;
