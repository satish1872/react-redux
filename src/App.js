import logo from './logo.svg';
import './App.css';
import Form from './form-controlled';
import FormUncontrolled from './form-uncontrolled';
import Examp from './Examp'
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <FormUncontrolled/> */}
      {/* <Examp val={"Hello"}/> */}
      <Button dark/>
      <Button/>
    </div>
  );
}

export default App;
