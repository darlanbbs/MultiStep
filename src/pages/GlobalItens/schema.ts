import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required("This field is required"),
    phoneNumber: yup.number().required().typeError("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("Invalid email format!"),
  })
  .required();

export const checkBoxSchema = yup.object({
  option1: yup.boolean(),
  option2: yup.boolean(),
  option3: yup.boolean(),
});
