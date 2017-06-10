import _ from 'lodash';

function isRectInViewport(rect) {
  return _.every([
    rect.bottom > 0,
    rect.right > 0,
    rect.left < (window.innerWidth || document.documentElement.clientWidth),
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  ]);
}

function isElementAriaDisabled(el) {
  return !!el.getAttribute('aria-disabled') || !!el.getAttribute('aria-hidden');
}

export function checkElementVisibility(el) {
  const elRect = el.getBoundingClientRect();
  if (!isRectInViewport(elRect) || isElementAriaDisabled(el)) {
    return false;
  }

  const elStyle = window.getComputedStyle(el);
  if (+elStyle.opacity === 0 || elStyle.visibility === 'hidden') {
    return false;
  }

  return {
    el,
    rect: elRect,
    style: elStyle
  };
}
