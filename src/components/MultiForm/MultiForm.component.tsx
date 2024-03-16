import { useMultistepForm } from '../../shared/hooks/useMultistepForm';
import FirstStep from './FirstStep/FirstStep.component';
import FourthStep from './FourthStep/FourthStep.component';
import './MultiForm.styles.scss';
import SecondStep from './SecondStep/SecondStep.component';
import ThirdStep from './ThirdStep/ThirdStep.component';

const MultiForm = () => {
  const stepsList = [
    <FirstStep />,
    <SecondStep />,
    <ThirdStep />,
    <FourthStep />,
  ];
  const { currentIndex, isFirstStep, isLastStep, step, next, back } =
    useMultistepForm(stepsList);
  return (
    <div className='multiFormContainer'>
      {step}
      {!isFirstStep && <button onClick={back}>Go Back</button>}
      {!isLastStep && <button onClick={next}>Next</button>}
    </div>
  );
};

export default MultiForm;
