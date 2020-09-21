/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-new-func */
import React, { useState, useEffect } from 'react';
import Screen from './components/Screen';
import Body from './components/Body';
import { GET_ALL, CREATE_ONE, DELETE_ALL} from './services/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [newCal, setNewCal] = useState(false);
  const [calculations, setCalculations] = useState([]);
  const [previousCal, setPreviousCal] = useState(calculations.length);

  const handleClick = (value) => {
    try {
      switch (value) {
        case "=":
          if (input.includes("=")) {
            setInput('');
            setOutput('Ans: ');
          } else {
            setInput(input + value);
            setOutput(`Ans: ${Function('"use strict";return (' + input + ')')()}`);
          }
          setNewCal(true);
          break;
        case "square":
          setInput(`square (${input}) = `);
          setOutput(`Ans: ${Function('"use strict";return (' + Math.pow(input, 2) + ')')()}`)
          setNewCal(true);
          break;
        case "square root":
          setInput(`square root (${input}) = `);
          setOutput(`Ans: ${Function('"use strict";return (' + Math.sqrt(input) + ')')()}`)
          setNewCal(true);
          break;
        case "cube":
          setInput(`cube (${input}) = `);
          setOutput(`Ans: ${Function('"use strict";return (' + Math.pow(input, 3) + ')')()}`)
          setNewCal(true);
          break;
        case "cube root":
          setInput(`cube root (${input}) = `);
          setOutput(`Ans: ${Function('"use strict";return (' + Math.cbrt(input) + ')')()}`)
          setNewCal(true);
          break;
        case "back":
          const previous = calculations.find(cal => {
            return cal.id === previousCal - 1;
          });

          if (previous) {
            setInput(previous.input);
            setOutput(previous.output);
            setNewCal(false);
          } else {
            setInput('');
            setOutput('');
            setNewCal(true);
          }
          setPreviousCal(prev => prev - 1 > 0 ? prev - 1 : 0);
          break;
        case "clear":
          setInput('');
          setOutput('');
          setNewCal(false);
          break;
        case "clear history":
          setInput('');
          setOutput('');
          setNewCal(false);
          clearAll();
          break;
        default:
          if (newCal) {
            setInput(value);
          } else {
            setInput(input + value);
          }
          setNewCal(false);
      }
    } catch (e) {
      setOutput('Invalid operation.');
      setNewCal(false);
    }
    
  }

  async function fetchData() {
    const res = await GET_ALL(); 
    if (res.status) {
      setCalculations(res.calculations);
    } else {
      setOutput("something went wrong!");
    }
  }

  async function clearAll() {
    const res = await DELETE_ALL(); 
    if (res.status) {
      setCalculations([]);
      setPreviousCal(0);
    } else {
      setOutput("something went wrong!");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    async function createData(id, input, output) {
      const res = await CREATE_ONE(id, input, output); 
      if (res.status) {
        fetchData();
        setPreviousCal(calculations.length + 1);
      } else {
        setOutput(" something went wrong!");
      }
    }

    if (newCal && input) {
      createData(calculations.length+1 ,input, output);
    }
  }, [input, output, newCal]);

  return (
    <div className="App container">
      <div className="header">
        <h2> Calculator </h2>
      </div>
      <div className="calculator">
        <Screen input={input} output={output}/>
        <Body handleClick={handleClick} disabled={!input.length} />
      </div>
    </div>
  );
}

export default App;
