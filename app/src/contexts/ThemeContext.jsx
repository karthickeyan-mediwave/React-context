import React, { createContext, useState } from "react";
import { Children } from "react";

// Create two context:
// ThemeContext: to query the context state
// ThemeDispatchContext: to mutate the context state
const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const DataContext = createContext(undefined);
const DataDispatchContext = createContext(undefined);
// const ThemeContext = createContext({});
// export const kk = [
//   {
//     id: 0,
//     value: "light",
//     name: "karthick",
//     Role: "Development trainee",
//     learning: "react-context",
//   },
//   {
//     id: 1,
//     value: "light",
//     name: "karthi",
//     Role: "Development ",
//     learning: "react-context",
//   },
// ];
function DataProvider({ children }) {
  const [userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  return (
    <DataContext.Provider value={userdata}>
      <DataDispatchContext.Provider value={setuserdata}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    {
      value: "light",
      name: "karthick",
      Role: "Development trainee",
      learning: "react-context",
    }
    // {
    //   id: 0,
    //   value: "light",
    //   name: "karthick",
    //   Role: "Development trainee",
    //   learning: "react-context",
    // },
    // {
    //   id: 1,
    //   value: "light",
    //   name: "karthick",
    //   Role: "Development trainee",
    //   learning: "react-context",
    // },
  );

  // const [theme, setTheme] = useState(kk[{}]);
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export {
  ThemeProvider,
  ThemeContext,
  ThemeDispatchContext,
  DataProvider,
  DataContext,
  DataDispatchContext,
};
