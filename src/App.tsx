import './App.css';
import { MultiFormStepProvider } from './Context/MultiFormContext';

function App() {
  //const { formValues } = useContext(MultiFormContex);
  return (
    <MultiFormStepProvider>
      <div>Aloha !!</div>
    </MultiFormStepProvider>
  );
}

export default App;
