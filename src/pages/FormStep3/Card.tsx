import * as C from "./style";
import * as D from "./../GlobalItens/StyleGlobalForm";

import { useForm } from "../../context/FormContext";

import { checkBoxSchema } from "../GlobalItens/schema";
import { useForm as useFormRHF } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  price1: any;
  price2: any;
  
}
interface checkBoxData {
  option1: any;
  option2: any;
  option3: any;
}

interface CheckboxState {
  checkbox1: any;
  checkbox2: any;
  checkbox3: any;
}


const Card = ({ price1, price2, }: Props) => {
  const [isChecked,setIsChecked] = useState<CheckboxState>({
    checkbox1:false,
    checkbox2:false,
    checkbox3:false
  })
  const {  setFormData } = useForm();
  const navigate = useNavigate();
  const { register, handleSubmit } = useFormRHF<checkBoxData>({
    resolver: yupResolver(checkBoxSchema),
  });

  function handleCheckboxChange(checkbox: keyof CheckboxState) {
    setIsChecked(prevState => ({
      ...prevState,
      [checkbox]: !prevState[checkbox]
    }));
  }
  function onSubmit(data: checkBoxData) {
    setFormData((prevItens: any) => {
      return {
        ...prevItens,
        data,
      };
    });
    navigate("/summary");
  }
  return (
    <>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <C.checkArea style={{borderColor:isChecked.checkbox1 ? 'red' : 'black'}}>
          <C.bothSide>
            <C.rightSide>
              <C.Checkbox checked={isChecked.checkbox1}  type={"checkbox"} {...register("option1", {})} 
               onChange={() => handleCheckboxChange('checkbox1')} 
                  />

              <C.titleArea>
                <C.title>Online service</C.title>
                <C.text>Access to multiplayer games</C.text>
              </C.titleArea>
            </C.rightSide>
            <C.leftSide>
              <C.price>{price1}</C.price>
            </C.leftSide>
          </C.bothSide>
        </C.checkArea>
        <C.checkArea style={{borderColor:isChecked.checkbox2 ? 'red' : 'black'}}>
          <C.bothSide>
            <C.rightSide>
            <C.Checkbox checked={isChecked.checkbox2}  type={"checkbox"} {...register("option2", {})} 
               onChange={() => handleCheckboxChange('checkbox2')} 
                  />

              <C.titleArea>
                <C.title>Larger storage</C.title>
                <C.text>Extra 1TB of cloud save</C.text>
              </C.titleArea>
            </C.rightSide>
            <C.leftSide>
              <C.price>{price2}</C.price>
            </C.leftSide>
          </C.bothSide>
        </C.checkArea>
        <C.checkArea style={{borderColor:isChecked.checkbox3 ? 'red' : 'black'}}>
          <C.bothSide>
            <C.rightSide>
            <C.Checkbox checked={isChecked.checkbox3}  type={"checkbox"} {...register("option3", {})} 
               onChange={() => handleCheckboxChange('checkbox3')} 
                  />

              <C.titleArea>
                <C.title>Customizable Profile</C.title>
                <C.text>Custom theme on your profile</C.text>
              </C.titleArea>
            </C.rightSide>
            <C.leftSide>
              <C.price>{price2}</C.price>
            </C.leftSide>
          </C.bothSide>
        </C.checkArea>
        <D.NextPreviousButton>
          <D.previousButton onClick={() => navigate("/plans")}>
            Previous
          </D.previousButton>
          <D.nextButton type="submit">Next</D.nextButton>
        </D.NextPreviousButton>
       
      </C.Form>
    </>
  );
};

export default Card;
