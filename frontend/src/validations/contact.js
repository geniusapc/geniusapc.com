import * as yup from 'yup';

export const contactMeSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  message: yup.string().required().label("Message")
});
