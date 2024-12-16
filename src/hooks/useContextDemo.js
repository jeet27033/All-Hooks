import { createContext, useContext, useState } from 'react';
import "./useContext.css"

const ThemeContext = createContext(null);

export const UseContextDemo = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
        <h1>Use Context Demo</h1>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
};

function Form() {
  return (
    <Panel title="Jeet">
      <Button>Click Me</Button> 
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;

  return (
    <button className={className}>
      {children}
    </button>
  );
}