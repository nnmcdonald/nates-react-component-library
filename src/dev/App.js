import './App.css';
import { Checkbox } from '../lib/components/UI/Checkbox/Checkbox';

function App() {
  const onClick = () => {
    console.log("CLICK");
  }
  return (
    <div className="App">
      {/* Test components here */ }
      <Checkbox onClick={onClick} label="This is a longer string for testing purposes" checked={true} />
      <Checkbox onClick={onClick} label="TEST" checked={true} />
    </div>
  );
}

export default App;
