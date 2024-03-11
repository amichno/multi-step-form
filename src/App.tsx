//import { useContext } from 'react';
import './App.scss';
import MultiForm from './components/MultiForm/MultiForm.component';
import StepList from './components/StepList/StepList.component';
import { MultiFormStepProvider } from './context/multiForm.context';

function App() {
  //const { formValues } = useContext(MultiFormContex);
  return (
    <MultiFormStepProvider>
      <div className='container'>
        <StepList />
        <MultiForm />
      </div>
    </MultiFormStepProvider>
  );
}

export default App;
