import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const homepageThunk = () => {
  return async (dispatch, getState) => {
    const homepagesCount = getState().homepages.length;
    const response = await axios.get(
      `${apiUrl}/homepages?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${homepagesCount}`
    );
    console.log("Response", response.data);
    dispatch({
      type: "FETCH_HOMEPAGES_SUCCESS",
      payload: response.data.homepages.rows
    });
  };
};
