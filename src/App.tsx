import { useContext } from 'react';
import './App.css';
import MultiFormContex, {
  MultiFormStepProvider,
} from './Context/MultiFormContext';

function App() {
  const { formValues } = useContext(MultiFormContex);
  return (
    <MultiFormStepProvider>
      <div>Aloha !!{formValues.name}</div>
    </MultiFormStepProvider>
  );
}

export default App;
