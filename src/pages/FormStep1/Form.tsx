import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormRHF } from "react-hook-form";
import { schema } from "../GlobalItens/schema";


import * as C from "./styles";
import * as D from "../GlobalItens/StyleGlobalForm";


import { useForm } from "../../context/FormContext";


import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  email: string;
  phoneNumber: number;
}

export const Form = () => {
  const navigate = useNavigate();
  const { setFormData } = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRHF<FormData>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    setFormData(data);
    navigate("/plans");
  }
  return (
    <>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <C.Label htmlFor="firstName">
          <C.titleLocal>
            <C.nameLabel>Name</C.nameLabel>
            {errors.firstName && (
              <C.errorLabel role="alert">
                {errors.firstName?.message}
              </C.errorLabel>
            )}
          </C.titleLocal>
          <C.Input
            {...register("firstName")}
            placeholder={"e.g. Stephen King"}
          />
        </C.Label>
        <C.Label>
          <C.titleLocal>
            <C.nameLabel>Email Addres</C.nameLabel>
            {errors.email && (
              <C.errorLabel role="alert">{errors.email?.message}</C.errorLabel>
            )}
          </C.titleLocal>
          <C.Input
            {...register("email")}
            placeholder={"e.g. stephenking@lorem.com"}
          />
        </C.Label>
        <C.Label htmlFor="phoneNumber">
          <C.titleLocal>
            <C.nameLabel>Phone Number</C.nameLabel>
            {errors.phoneNumber && (
              <C.errorLabel role="alert">
                {errors.phoneNumber?.message}
              </C.errorLabel>
            )}
          </C.titleLocal>
          <C.Input
            {...register("phoneNumber")}
            placeholder={"e.g. +1 234 567 890"}
          />
        </C.Label>

        <D.onlyButton>
          <D.nextButton type="submit">Next Step</D.nextButton>
        </D.onlyButton>
      </C.Form>
    </>
  );
};
