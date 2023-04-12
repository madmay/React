import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Welcome  from './Components/Welcome';
import Hello from './Components/Hello';
import Counter from './Components/Counter';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Hello />
      <Counter></Counter> */}
      <ParentComponent />
    </div>
  );
}

export default App;
