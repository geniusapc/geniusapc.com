import axios from "axios";
import { useMutation } from "react-query";
import { SERVER_BASEURL } from "../config/keys";


const contactEmail = (data) => {
  return axios.post(`${SERVER_BASEURL}/send`, data);
};

const useSendContactEmail = (onError, onSuccess) => {
  return useMutation(contactEmail, { onError, onSuccess });
};

export { useSendContactEmail }
