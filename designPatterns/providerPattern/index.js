// Although we can pass data to components using props,
// this can be difficult to do if almost all components in
// your application need access to the value of the props.

// We often end up with something called prop drilling,
// which is the case when we pass props far down the component tree.
// Refactoring the code that relies on the props becomes almost impossible,
// and knowing where certain data comes from is difficult.
const DataContext = React.createContext();

function App() {
  const data = {};

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
}
export const ThemeContext = React.createContext();

const themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#171717",
    color: "#fff",
  },
};

export default function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}

export default function Toggle() {
    const theme = useContext(ThemeContext);

    return (
      <label className="switch">
        <input type="checkbox" onClick={theme.toggleTheme} />
        <span className="slider round" />
      </label>
    );
  }