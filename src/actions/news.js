export const OPEN_URL = "OPEN_URL";
export const CLOSE_URL = "CLOSE_URL";

export const openUrl = data => ({
  type: OPEN_URL,
  payload: {
    data: data
  }
});

export const closeUrl = () => ({
  type: CLOSE_URL
});
