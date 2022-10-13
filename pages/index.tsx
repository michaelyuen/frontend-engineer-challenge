import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Countdown } from "../components";

const Home: NextPage = () => {
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
  }, []);

  const data = theme && theme.data && theme.data.data;
  return (
    <>
      <Head>
        <title>Countdown | Koala</title>
        <meta
          name="description"
          content="Countdown app for Koala take home test"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {theme && (
        <ThemeProvider theme={data}>
          <Countdown />
        </ThemeProvider>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return { props: {} };
};
