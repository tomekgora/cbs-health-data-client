import request from "superagent";

const baseUrl = "http://localhost:4000";

function dataFetched(data) {
  return {
    type: "DATA_RECEIVED",
    payload: data
  };
}

export const fetchData = selection => dispatch => {
  console.log("Request is being made");
  request
    .post(`${baseUrl}/data`)
    .send({ selection: selection })
    .then(res => {
      console.log("response received", res.body);
      dispatch(dataFetched(res.body));
    })
    .catch(err => console.error(err));
};
