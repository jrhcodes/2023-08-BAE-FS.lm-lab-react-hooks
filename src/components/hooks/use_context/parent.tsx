import { useState, createContext } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';

interface Theme {
    border: string;
    background: string;
    color: string;
}

const lightTheme: Theme = {
    border: '2px solid black',
    background: 'white',
    color: 'black',
};

const darkTheme: Theme = {
    border: '2px solid grey',
    background: 'black',
    color: 'white',
};

export const ThemeContext = createContext<Theme>(lightTheme);
const defaultThemeIsDark = false;

export const Parent = () => {
    const [themeIsDark, setDarkTheme] = useState(defaultThemeIsDark);

    const toggleTheme = () => {
        setDarkTheme(!themeIsDark);
    };
    console.log(themeIsDark);
    return (
        <div className="section">
            <h2>useContext</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeContext.Provider value={themeIsDark ? darkTheme : lightTheme}>
                <Child1 />
                <Child2 />
            </ThemeContext.Provider>
        </div>
    );
};
