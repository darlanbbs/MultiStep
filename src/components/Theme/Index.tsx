import React, { ReactNode } from "react";
import SideBar from "../SideBar/Index";
import * as C from "./style";
import { useForm } from "./../../context/FormContext";
import SideBarM from "../SideBarM/Index";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <C.Steps>
          <C.Sidebar>
            <C.step>
              <SideBar
                descriptions={"YOUR INFO"}
                path="/"
                number={1}
                active={state.currentStep === 1}
                step={"step 1"}
              />
              <SideBar
                descriptions={"select plan"}
                step={"step 2"}
                path="/plans"
                number={2}
                active={state.currentStep === 2}
              />
              <SideBar
                descriptions={"add-ons"}
                step={"step 3"}
                path="/services"
                number={3}
                active={state.currentStep === 3}
              />
              <SideBar
                descriptions={"summary"}
                step={"step 4"}
                path="/summary"
                number={4}
                active={state.currentStep === 4}
              />
            </C.step>
          </C.Sidebar>
          <C.Page>
          <C.SidebarM>
            <C.step>
              <SideBarM
               
                path="/"
                number={1}
                active={state.currentStep === 1}
                
              />
              <SideBarM
                
                path="/plans"
                number={2}
                active={state.currentStep === 2}
              />
              <SideBarM
               
                path="/services"
                number={3}
                active={state.currentStep === 3}
              />
              <SideBarM
               
                path="/summary"
                number={4}
                active={state.currentStep === 4}
              />
            </C.step>
          </C.SidebarM>
            {children}
            </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
