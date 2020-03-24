import axios from "axios";
import { apiUrl } from "../../config/constants";

const homepageDetailsFetched = homepage => ({
  type: "HOMEPAGE_DETAILS_FETCHED",
  payload: homepage
});

export const fetchHomepageById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log(response.data);
    dispatch(homepageDetailsFetched(response.data.homepage));
  };
};
