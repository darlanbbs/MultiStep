import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//style
import * as C from "./styles";
import * as D from "./../GlobalItens/StyleGlobalForm";
import Theme from "../../components/Theme/Index";

//context
import { formActions, useForm } from "../../context/FormContext";

//components
import Card from "./Card";

import Title from "../GlobalItens/Title";

const Page4 = () => {

  const navigate = useNavigate();
  const { dispatch, state,formData } = useForm();

  useEffect(() => {
    if (formData.data.option1 == false && formData.data.option2 == false && formData.data.option3 == false) {
      alert('Choose an addon for the next step')
      navigate('/services')

    }else{
      dispatch({
        type: formActions.setCurrentStep,
        payload: 4,
      });
    }
    
  }, []);
console.log(formData.data)
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

