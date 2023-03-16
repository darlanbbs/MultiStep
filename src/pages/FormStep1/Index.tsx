import { useEffect } from "react";

import * as C from "./style";

import Theme from "../../components/Theme/Index";

import { formActions, useForm } from "./../../context/FormContext";
import Title from "../GlobalItens/Title";
import { Input } from "./Input";

const Page1 = () => {
  const { dispatch } = useForm();
  useEffect(() => {
    dispatch({
      type: formActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <Title
          title="Personal Info"
          subTitle=" Please provide your name, email address, and phone number."
        />
        <Input />
      </C.Container>
    </Theme>
  );
};

export default Page1;
