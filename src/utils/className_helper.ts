// To check if the classname includes classname that overrides the default css propertes

interface IClassNameIntem {
  searchString: string;
  defaultClassName: string;
}

/*
 * @param className: the className passed as props
 * @param classNamesToCheck: [
 *   {
 *     searchString: string/className to search,
 *     defaultClassName: default classname to apply if classNames does not include searchString
 *   },
 * ]
 */
export const checkClassName = (
  className: string = '',
  classNamesToCheck: IClassNameIntem[]
) => {
  const classNames = [className];

  classNamesToCheck.forEach(
    (item) =>
      !className.includes(item.searchString) &&
      classNames.push(item.defaultClassName)
  );

  return classNames.join(' ');
};
