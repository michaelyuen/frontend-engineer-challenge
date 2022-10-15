export const getFirstQueryParam = (qp: string | string[]) =>
  Array.isArray(qp) ? qp[0] : qp;

export const setQueryParameters = (queryParameters: {
  [key: string]: string;
}) => {
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
