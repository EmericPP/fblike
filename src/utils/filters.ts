
export const isNullorUndefined = (x: string | object) => (x === null || x === undefined);

export const isObject = (x: string | object): x is object => (
  !isNullorUndefined(x)
  && !(x instanceof Date)
  && typeof (x) === 'object'
  && !Array.isArray(x)
);
