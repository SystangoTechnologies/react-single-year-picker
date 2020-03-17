##React single Year Picker

A Year picker component for React.
Demo: Check out the [Demo](https://react-year-picker.firebaseapp.com/).

##Installation

npm install react-single-year-picker --save

import React, { useState } from 'react';

const App = () => {
  const [yearSelected, setYear] = useState(1990);
  return (
    <div>
      <header>
        <YearPicker
          yearArray={['2019', '2020']}
          value={yearSelected}
          onSelect={(e) => setYear(e)}
          activeIcon={src url}
          icon={src url}
          leftIcon={src url}
          rightIcon={src url}
          minRange={1000}
          maxRange={2018}
        />
      </header>
    </div>
  );
}

##Props

yearArray: Array of year.
onSelect: on year click event.
activeIcon: This props is for Calendar Icon, accept Image or Icon src url.
icon: Inactive calendar icon, accept Image or Icon src url.
leftIcon: Picker left icon, accept Image or Icon src url.
rightIcon: Picker right icon, accept Image or Icon src url.
minRange: Min range of the year picker.
maxRange: Max range of the year picker.
