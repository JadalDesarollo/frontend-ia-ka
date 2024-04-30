import { ValueFormPredict } from "../predict.interface";

export const predictForm = async (formValue: ValueFormPredict) => {
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValue),
  });
  const data = await response.json();
  return data
};
