import {
  getFirstQueryParam,
  getTimeRemaining,
  isPast,
  normalizeConfig,
} from ".";
import { config } from "./__mocks__/web-config";

describe("Utils", () => {
  describe("getFirstQueryParam", () => {
    test("when value is a string, returns that value", () => {
      expect(getFirstQueryParam("Foo")).toBe("Foo");
    });

    test("when value is an array, returns the first element", () => {
      expect(getFirstQueryParam(["one", "two", "three"])).toBe("one");
    });
  });

  describe("getTimeRemaining", () => {
    test("returns hours, minutes, and seconds", () => {
      const startDate = new Date("2022-10-16T22:00");
      const endDate = "2022-10-16T23:45";
      expect(getTimeRemaining({ startDate, endDate })).toStrictEqual({
        hours: 1,
        minutes: 45,
        seconds: 0,
      });
    });

    test("returns years, months, and days", () => {
      const startDate = new Date("2022-10-16T22:00");
      const endDate = "2024-12-16T08:02";
      expect(getTimeRemaining({ startDate, endDate })).toStrictEqual({
        years: 2,
        months: 1,
        days: 29,
        hours: 10,
        minutes: 2,
        seconds: 0,
      });
    });

    test("removes years, months, and days when their value is 0", () => {
      const startDate = new Date("2022-10-16T22:00");
      const endDate = "2022-10-16T23:45";
      const timeRemaining = getTimeRemaining({ startDate, endDate });
      expect("years" in timeRemaining).toBe(false);
      expect("months" in timeRemaining).toBe(false);
      expect("days" in timeRemaining).toBe(false);
    });
  });

  describe("isPast", () => {
    test("returns true if deadline is in the past", () => {
      expect(isPast("2022-10-16T00:00")).toBe(true);
    });

    /**
     * Technically a time bomb. This should fail in about 1 year.
     */
    test("returns false if deadline is in the future", () => {
      expect(isPast("2023-10-16T00:00")).toBe(false);
    });
  });

  describe("normalizeConfig", () => {
    test("should return normalized object with config and theme properties", () => {
      expect(normalizeConfig(config)).toStrictEqual({
        config: {
          favicon: "/favicon.ico",
        },
        theme: {
          backgroundColor: "#fbf8f7",
          borderColor: "#e1e1e1",
          borderRadius: "5px",
          fontColor: "#222222",
          fontFamily: '"Arial", "Helvetica"',
          fontSize: "14px",
        },
      });
    });
  });

  /**
   * TODO(my): need to mock window history/navigation stuff for these
   * - Not urgent because I trust these browser functions
   */
  xdescribe("resetQueryParameters", () => {});
  xdescribe("setQueryParameters", () => {});
});
