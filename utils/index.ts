import { intervalToDuration, isPast as isPastDateFns } from "date-fns";
import { DeadlineValue } from "../components";
import { Theme } from "../styles/GlobalStyle";

export const getFirstQueryParam = (qp: string | string[]) =>
  Array.isArray(qp) ? qp[0] : qp;

export const getTimeRemaining = (endDate: DeadlineValue) => {
  const dur = intervalToDuration({
    start: new Date(),
    end: new Date(endDate),
  });
  if (dur.years === 0) delete dur.years;
  if (dur.weeks === 0) delete dur.weeks;
  if (dur.months === 0) delete dur.months;
  if (dur.days === 0) delete dur.days;
  return dur;
};

export const isPast = (deadline: DeadlineValue) =>
  isPastDateFns(new Date(deadline));

export interface Config {
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

export interface NormalizedConfig {
  config: {
    favicon: string;
  };
  theme: Theme;
}

export const normalizeConfig = (config: Config): NormalizedConfig => {
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

export const resetQueryParameters = () => {
  if (typeof window === "undefined") {
    console.warn(
      "[resetQueryParameters] this function is only intended to be called in a browser environment"
    );
  } else {
    window.history.replaceState({}, "", window.location.href.split("?")[0]);
  }
};

interface Dictionary {
  [key: string]: string;
}

export const setQueryParameters = (queryParameters: Dictionary) => {
  if (typeof window === "undefined") {
    console.warn(
      "[setQueryParameters] this function is only intended to be called in a browser environment"
    );
  } else {
    const searchParameters = new URLSearchParams();
    Object.keys(queryParameters).forEach(
      (key) =>
        queryParameters[key] && searchParameters.set(key, queryParameters[key])
    );

    // TODO(@my): Research changing to pushState, but need to detect browser back/forward button too
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${searchParameters.toString()}`
    );
  }
};
