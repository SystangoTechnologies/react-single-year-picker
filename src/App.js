import React, { useState } from 'react';
import './App.css';
import YearPicker from './yearPicker/yearPicker';
function App() {
  const [yearSelected, setYear] = useState(1990);
  // ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  // [ 1990,  1991, 1992, 1993, 1994, 1996,  1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007]
  return (
    <div className="App">
      <header className="App-header">
        <YearPicker
          yearArray={['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']}
          value={yearSelected}
          onSelect={(e) => setYear(e)}
          // activeIcon={img src}
          // icon={img src}
          // leftIcon={img src}
          // rightIcon={img src}
          minRange={1000}
          maxRange={2018}
        />
      </header>
    </div>
  );
}

export default App;
