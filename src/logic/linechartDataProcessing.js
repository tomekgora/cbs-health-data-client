export function lineChartDataProcessing(rawData) {
  const { Periods, ...restOfKeys } = rawData[0]; // ["men", "women", "periods"]
  const ids = Object.keys(restOfKeys); //["men", "women"]

  let arr = [];
  ids.forEach(idName => arr.push({ id: idName, data: [] }));
  /*
arr = [
  { id: "men", data: [] },
  { id: "women", data: [] },
]
*/
  rawData.forEach(dataPoint => {
    const keysToLookFor = arr.map(e => e.id); //["men", "women"]
    keysToLookFor.forEach(key => {
      const newdata = {
        x: dataPoint.Periods.substring(0, 4), // getting just the year out
        y: dataPoint[key]
      };
      arr.find(el => el.id === key).data.push(newdata);
    });
  });
  console.log(arr[0].data);
  return arr;
}
