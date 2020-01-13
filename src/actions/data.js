import request from "superagent";

const baseUrl = "http://localhost:4000";

function dataFetched(data) {
  return {
    type: "DATA_FETCHED",
    payload: data
  };
}

export const fetchData = selection => dispatch => {
  request
    .get(`${baseUrl}/data`)
    .query({ selection })
    .then(res => {
      dispatch(dataFetched(res.body));
    })
    .catch(console.error);
};
