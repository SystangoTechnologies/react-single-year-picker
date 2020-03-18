import React, { useState } from 'react';
import YearPicker from './yearPicker';
import githubIcon from './assets/images/github.png';
import './App.css';

const App = () => {
  const [yearSelected, setYear] = useState(1990);
  const yearArray = [ '1990',  '1991', '1992', '1993', '1994', '1995', '1996',  '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'];
  const stringArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const emoticonsArray = ['🙂', '😊', '😀', '😁', '😃', '😄', '😆', '😍', '️🙁', '😠', '😡', '😞', '😟', '😣', '😖']
  const viewType = ['year', 'string', 'emoticons'];
  const [displayArray, setDisplayArray] = useState(yearArray);
  const [display, setDisplay] = useState('year');
  
  const handleDisplay = (displayType) => {
    setDisplay(displayType)
    switch(displayType){
      case 'year':
       setDisplayArray(yearArray);
       setYear(1990) 
      break;
      case 'string':
        setDisplayArray(stringArray) 
        setYear('A') 
      break;
      case 'emoticons':
        setDisplayArray(emoticonsArray)
        setYear('🙂')  
      break;
      default:
        setDisplayArray(yearArray)
        setYear(1990) 
      break;
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>React Picker</h1>
        <div className="list-link">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/SystangoTechnologies/react-single-year-picker" alt="Github">
            <img src={githubIcon} width="40" alt="github"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-single-year-picker" alt="NPM">
            npm
          </a>
        </div>
        <div>
          {viewType.map((type) => {
              return (<button className="btn" key={type} onClick={() => handleDisplay(type)} disabled={display === type}>{type}</button>)
          })}
        </div>
        <div className="date-box">
          <label>Please select {display}</label>
          <YearPicker
            yearArray={displayArray}
            value={yearSelected}
            onSelect={(e) => setYear(e)}
            hideInput={false}
            // activeIcon={img src}
            // icon={img src}
            // leftIcon={img src}
            // rightIcon={img src}
            // minRange={1999}
            // maxRange={2018}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
