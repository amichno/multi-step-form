import Buttons from './Buttons/Buttons.component';
import FirstStep from './FirstStep/FirstStep.component';
import './MultiForm.styles.scss';

const MultiForm = () => {
  return (
    <div className='multiFormContainer'>
      <FirstStep />
      <Buttons />
    </div>
  );
};

export default MultiForm;
