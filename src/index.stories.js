import React from 'react';
import { Button } from '@storybook/react/demo';
import App from './App';

export default { title: 'React Single Year Picker' };

export const yearPickerComponent = () => <App />;

export const props = () => (
    <ul role="img" aria-label="so cool">
        <li>yearArray</li>
        <li>value</li>
        <li>onSelect</li>
        <li>activeIcon</li>
        <li>icon</li>
        <li>leftIcon</li>
        <li>rightIcon</li>
        <li>minRange</li>
        <li>maxRange</li>
    </ul>
);