import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Countdown, DeadlineForm } from "../components";
import { GlobalStyle, Theme } from "../styles/GlobalStyle";
import { getFirstQueryParam, setQueryParameters } from "../utils";

interface HomeProps {
  config: NormalizedConfig["config"];
  initialDeadline: string;
  initialName: string;
  theme: NormalizedConfig["theme"];
}

const Home: NextPage<HomeProps> = ({
  config,
  initialDeadline,
  initialName,
  theme,
}) => {
  const [formData, setFormData] = useState({
    name: initialName,
    deadline: initialDeadline,
  });
  const [isCountdownStarted, setCountdownStarted] = useState(
    initialDeadline && initialName
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQueryParameters(formData);
    setCountdownStarted(true);
  };

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
        {!isCountdownStarted && (
          <DeadlineForm
            deadlineValue={formData.deadline}
            disabled={!(formData.deadline && formData.name)}
            nameValue={formData.name}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}
        {isCountdownStarted && (
          <Countdown deadline={formData.deadline} name={formData.name} />
        )}
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

  const initialName = getFirstQueryParam(context.query?.name ?? "");
  // TODO(my): validate the actual value
  const initialDeadline = getFirstQueryParam(context.query?.deadline ?? "");

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
    return { props: { initialName, initialDeadline, ...normalizedConfig } };
  } catch (e) {
    console.error(e);
  }

  return { props: { initialName, initialDeadline } };
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
