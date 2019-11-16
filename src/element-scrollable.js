export const checkScrollable = (element) => {
  const computedStyle = getComputedStyle(element);
  const canScrollNow = element.scrollHeight > element.clientHeight
        && (computedStyle.overflowY === 'auto' || computedStyle.overflowY === 'scroll');
  return canScrollNow;
};
