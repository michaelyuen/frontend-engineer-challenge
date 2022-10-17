import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  Countdown,
  DeadlineForm,
  DeadlineFormData,
  DeadlineValue,
} from "../components";
import { GlobalStyle } from "../styles/GlobalStyle";
import {
  getFirstQueryParam,
  normalizeConfig,
  NormalizedConfig,
  resetQueryParameters,
  setQueryParameters,
} from "../utils";

interface HomeProps extends NormalizedConfig {
  initialDeadlineName: DeadlineFormData["deadlineName"];
  initialDeadlineValue: DeadlineFormData["deadlineValue"];
}

const Home: NextPage<HomeProps> = ({
  config,
  initialDeadlineValue,
  initialDeadlineName,
  theme,
}) => {
  const [formData, setFormData] = useState<DeadlineFormData>({
    deadlineName: initialDeadlineName,
    deadlineValue: initialDeadlineValue,
  });
  const resetFormData = () =>
    setFormData({ deadlineName: "", deadlineValue: "" as DeadlineValue });
  const [isCountdownStarted, setCountdownStarted] = useState(
    !!(initialDeadlineName && initialDeadlineValue)
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onReset = () => {
    resetQueryParameters();
    resetFormData();
    setCountdownStarted(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /**
     * Alias to provide more simple and human-readable query parameters
     * - deadlineName => name
     * - deadlineValue => deadline
     */
    const { deadlineName: name, deadlineValue: deadline } = formData;
    setQueryParameters({ name, deadline });
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
        {/* TODO(my): change based on theme */}
        <meta name="theme-color" content="#211e2b" />
      </Head>
      <GlobalStyle theme={theme} />
      <main>
        {!isCountdownStarted && (
          <DeadlineForm
            deadlineName={formData.deadlineName}
            deadlineValue={formData.deadlineValue}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}
        {isCountdownStarted && (
          <Countdown
            deadlineName={formData.deadlineName}
            deadlineValue={formData.deadlineValue}
            isLoading={typeof window === "undefined"}
            onReset={onReset}
          />
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

  const initialDeadlineProps = {
    initialDeadlineName: getFirstQueryParam(context.query?.name ?? ""),
    // TODO(my): validate the actual value
    initialDeadlineValue: getFirstQueryParam(context.query?.deadline ?? ""),
  };

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
    return { props: { ...initialDeadlineProps, ...normalizedConfig } };
  } catch (e) {
    console.error(e);
  }

  return { props: initialDeadlineProps };
};
