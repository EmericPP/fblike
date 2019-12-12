import { isObject } from './filters';

export const addClassModifier = (className: string, classModifier: string | object) => (
  classModifier ? `${className}--${classModifier}` : ''
);

const conditionnallyAddClassModifier = (
  className: string,
  classModifier: {[key: string]: object},
) => (
  Object.keys(classModifier)
    .map((modifierString: string) => (classModifier[modifierString]
      ? addClassModifier(className, modifierString) : ''))
    .join(' ')
);

export const classWithModifiers = (className: string, modifiers: [string]) => {
  if (!modifiers) return className;
  /* eslint-disable no-param-reassign */
  if (!Array.isArray(modifiers)) modifiers = [modifiers];
  const classes = [
    className,
    ...modifiers
      .map((modifier: string | {[key: string]: object}) => (isObject(modifier)
        ? conditionnallyAddClassModifier(className, modifier)
        : addClassModifier(className, modifier))),
  ];
  return classes
    .join(' ')
    .replace(/\s\s+/g, ' ')
    .trim();
};
