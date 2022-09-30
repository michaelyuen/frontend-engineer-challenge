import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

// Components
import { Countdown } from "./components/countdown";

export const App = () => {
  const [theme, setTheme] = useState<any>();

  useEffect(() => {
    fetch(
      "https://api.koala.io/marketing/v1/device-configurations/alias/web-config",
      {
        method: "GET",
        headers: {
          "X-Organization-Id": "1",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => setTheme(result),
        (error) => console.log(error)
      );
  });

  const data = theme && theme.data && theme.data.data;
  return (
    theme && (
      <ThemeProvider theme={data}>
        <Countdown />
      </ThemeProvider>
    )
  );
};
