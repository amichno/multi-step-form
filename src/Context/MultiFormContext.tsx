/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

interface IMultiForm {
  name: string;
  emailAddress: string;
  phone: string;
  selectedPlan: string;
  typeOfBiling: string;
  additionalOptions?: any;
}
interface IMultiFormContext {
  formValues: IMultiForm;
  setFormsValues: () => void;
}

const emptyForm = {
  name: '',
  emailAddress: '',
  phone: '',
  selectedPlan: '',
  typeOfBiling: '',
  additionalOptions: '',
};

const MultiFormContex = React.createContext<IMultiFormContext>({
  formValues: emptyForm,
  setFormsValues: () => {},
});

export const MultiFormStepProvider = (props: any) => {
  const [multiForm, setMultiForm] = React.useState<IMultiForm>();

  const setFormContext = (newForm: IMultiForm) => {
    setMultiForm(newForm);
  };

  return (
    <MultiFormContex.Provider value={{ multiForm, setFormContext }}>
      {props.children}
    </MultiFormContex.Provider>
  );
};
export default MultiFormContex;
