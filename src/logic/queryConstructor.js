export function queryConstructor(formInputs) {
  let selection = "";

  formInputs.map(el => {
    if (el.checked === true) {
      selection = selection + "," + el.value;
      return selection;
    }
    return selection;
  });
  return selection;
}
