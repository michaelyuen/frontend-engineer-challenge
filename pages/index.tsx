import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Countdown } from "../components";
import { GlobalStyle, Theme } from "../styles/GlobalStyle";

const Home: NextPage<NormalizedConfig> = ({ config, theme }) => {
  return (
    <>
      <Head>
        <title>Countdown | Koala</title>
        <meta
          name="description"
          content="Countdown app for Koala take home test"
        />
        <link rel="icon" href={config.favicon || "/favicon.ico"} />
      </Head>
      <GlobalStyle theme={theme} />
      <main>
        <h1>When is the deadline?</h1>
        <Countdown />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  try {
    const res = await fetch(
      "https://api.koala.io/marketing/v1/device-configurations/alias/web-config",
      {
        method: "GET",
        headers: {
          "X-Organization-Id": "1",
        },
      }
    );
    const config = await res.json();
    const normalizedConfig = normalizeConfig(config);
    return { props: normalizedConfig };
  } catch (e) {
    console.error(e);
  }

  return { props: {} };
};

interface Config {
  data: {
    data: {
      global: {
        favicon: string;
        body_color: string;
        border_radius: number;
        primary_border_color: string;
      };
      primary_font_family: {
        bold: string;
        light: string;
        medium: string;
        regular: string;
      };
      text: {
        primary_text_size: number;
        primary_text_color: string;
      };
    };
  };
}

interface NormalizedConfig {
  config: {
    favicon: string;
  };
  theme: Theme;
}

const normalizeConfig = (config: Config): NormalizedConfig => {
  const {
    data: { data },
  } = config;
  const { global, primary_font_family, text } = data;
  const { favicon, body_color, border_radius, primary_border_color } = global;
  const { regular } = primary_font_family;
  const { primary_text_size, primary_text_color } = text;
  return {
    config: {
      favicon,
    },
    theme: {
      backgroundColor: body_color,
      borderColor: primary_border_color,
      borderRadius: `${border_radius}px`,
      fontColor: primary_text_color,
      fontFamily: regular,
      fontSize: `${primary_text_size}px`,
    },
  };
};
