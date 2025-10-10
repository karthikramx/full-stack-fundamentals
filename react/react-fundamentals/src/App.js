import './App.css';
import { TestComponent } from './components/testComponent';
import { TestContext } from './context/testContext';
import { useContext } from 'react';

function App() {

  const { test, setTest } = useContext(TestContext)

  console.log("This is from APP:", test)

  return (
    <div className="App">
      <h1>React Context</h1>
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
