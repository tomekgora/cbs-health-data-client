import request from "superagent";
import { lineChartDataProcessing } from "../logic/linechartDataProcessing";

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
      const processedData = lineChartDataProcessing(res.body);
      console.log("transformed data", processedData);
      dispatch(dataFetched(processedData));
    })
    .catch(err => console.error(err));
};
