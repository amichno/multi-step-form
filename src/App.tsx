import { useContext } from 'react';
import './App.css';
import MultiFormContex, {
  MultiFormStepProvider,
} from './context/multiForm.context';

function App() {
  const { formValues } = useContext(MultiFormContex);
  return (
    <MultiFormStepProvider>
      <div>Aloha !!{formValues.name}</div>
    </MultiFormStepProvider>
  );
}

export default App;
