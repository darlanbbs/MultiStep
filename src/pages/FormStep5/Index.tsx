import { useEffect } from "react";
import * as C from "./style";
import * as D from "../GlobalItens/StyleGlobalForm";
import Theme from "../../components/Theme/Index";

import { formActions, useForm } from "../../context/FormContext";

const Page5 = () => {

  const { dispatch } = useForm();

  useEffect(() => {

      dispatch({
        type: formActions.setCurrentStep,
        payload: 5,
      });
    
  }, []);

  return (
    <Theme>
      <C.Container>
        <img src="/icon-thank-you.svg" alt="Icon-Thank You" />
        <D.titleText>Thank You</D.titleText>
        <D.subText>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </D.subText>
      </C.Container>
    </Theme>
  );
};

export default Page5;
