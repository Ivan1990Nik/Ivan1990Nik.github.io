

export const required = (values) => {
  if (values) return undefined;
  return "пустое поле не отправить ушлепок"; 
};

/* const required = (value) => (value ? undefined : "Required"); */


export const maxLengthCreator = maxLength => values => {
  debugger;
  if (values.length > maxLength) return `сука больше  ${maxLength} символов НЕЛЬЗЯ!!!`;
  return undefined;
};
/* export const maxLengthCreator = (max) => (values) =>
  values && values.length > max ? `Max length is ${max} symbols` : undefined;
 */
/* export const minLengthCreator = (min) => (values) =>
  values && values.length < min ? `Max length is ${min} symbols` : undefined; */
