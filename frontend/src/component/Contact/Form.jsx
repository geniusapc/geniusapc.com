import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactMeSchema } from "../../validations/contact";
import { useSendContactEmail } from "../../hooks/useEmailData";

const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactMeSchema) });

  const onError = ({ response }) => {
    const errorMessage = response?.data || "An error occurred";
    toast.error(errorMessage, { hideProgressBar: true });
  };

  const onSuccess = async () => {
    toast.success("Message sent successfully", { hideProgressBar: true });
    reset();
  };

  const { mutate: sendMail } = useSendContactEmail(onError, onSuccess);
  const sendMessage = async (data) => {
    sendMail({ name: data.name, from: data.email, message: data.message });
  };

  return (
    <div id="contact-form-container">
      <form
        id="contact-form"
        onSubmit={handleSubmit((data) => sendMessage(data))}
      >
        <div>
          <input type="text" placeholder="Your Name" {...register("name")} />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </div>
        <div>
          <textarea
            className="default-input-form"
            placeholder="Message"
            {...register("message")}
          />
          {errors.message && <p role="alert">{errors.message?.message}</p>}
        </div>
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Form;
