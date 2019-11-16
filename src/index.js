import _ from 'lodash';
import {
  elementTypes,
  textInputs,
  datePickers,
} from './element-types';
import { checkElementVisibility } from './element-visibility';
import { checkScrollable } from './element-scrollable';

function is(selectors, el) {
  return _.some(selectors, (selector) => el.matches(selector));
}

export function isScrollable(el) {
  return checkScrollable(el);
}

export function isImage(el) {
  return is(elementTypes.image, el);
}

export function isLink(el) {
  return is(elementTypes.link, el);
}

export function isText(el) {
  return is(elementTypes.text, el);
}

export function isTextInput(el) {
  return is(elementTypes.textInput, el);
}

export function isMultilineTextInput(el) {
  return el.matches(textInputs.textarea);
}

export function isColorInput(el) {
  return is(elementTypes.color, el);
}

export function isSelect(el) {
  return is(elementTypes.select, el);
}

export function isMedia(el) {
  return is(elementTypes.media, el);
}

export function isRange(el) {
  return is(elementTypes.range, el);
}

export function isAnyTypeOfDatePicker(el) {
  return is(elementTypes.datePicker, el);
}

export function isDatePicker(el) {
  return el.matches(datePickers.date);
}

export function isDatetimePicker(el) {
  return el.matches([datePickers.datetime, datePickers.datetimeLocal]);
}

export function isMonthPicker(el) {
  return el.matches(datePickers.month);
}

export function isTimePicker(el) {
  return el.matches(datePickers.time);
}

export function isWeekPicker(el) {
  return el.matches(datePickers.week);
}

export function isVisible(el) {
  return !!checkElementVisibility(el);
}

export function getVisibleElementsInViewPort(selectors = '*') {
  return _.filter(document.querySelectorAll(selectors), isVisible);
}

export function getVisibleElementsInViewPortExpandedData(selectors = '*') {
  return _.compact(_.map(document.querySelectorAll(selectors), checkElementVisibility));
}

export function getAllElementTypes() {
  return elementTypes;
}
