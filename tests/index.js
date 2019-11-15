import {
  isImage,
  isLink,
  isText,
  isTextInput,
  isMultilineTextInput,
  isColorInput,
  isSelect,
  isMedia,
  isRange,
  isAnyTypeOfDatePicker,
  isDatePicker,
  isDatetimePicker,
  isMonthPicker,
  isTimePicker,
  isWeekPicker,
  isVisible,
  getVisibleElementsInViewPort,
  getVisibleElementsInViewPortExpandedData,
  getAllElementTypes,
  isScrollable } from './../src/index';

const img = document.createElement('img');
const p = document.createElement('p');
const a = document.createElement('a');
const inputText = document.createElement('input'); inputText.type = 'text';
const textarea = document.createElement('textarea');
const colorInput = document.createElement('input'); colorInput.type = 'color';
const select = document.createElement('select');
const video = document.createElement('video');
const rangeInput = document.createElement('input'); rangeInput.type = 'range';
const dateInput = document.createElement('input'); dateInput.type = 'date';
const datetimeInput = document.createElement('input'); datetimeInput.type = 'datetime';
const monthInput = document.createElement('input'); monthInput.type = 'month';
const timeInput = document.createElement('input'); timeInput.type = 'time';
const weekInput = document.createElement('input'); weekInput.type = 'week';

it('isImage', () => {
  expect(isImage(p)).to.equal(false);
  expect(isImage(img)).to.equal(true);
});

it('isLink', () => {
  expect(isLink(p)).to.equal(false);
  expect(isLink(a)).to.equal(true);
});

it('isText', () => {
  expect(isText(a)).to.equal(false);
  expect(isText(p)).to.equal(true);
});

it('isTextInput', () => {
  expect(isTextInput(p)).to.equal(false);
  expect(isTextInput(inputText)).to.equal(true);
});

it('isMultilineTextInput', () => {
  expect(isMultilineTextInput(inputText)).to.equal(false);
  expect(isMultilineTextInput(textarea)).to.equal(true);
});

it('isColorInput', () => {
  expect(isColorInput(inputText)).to.equal(false);
  expect(isColorInput(colorInput)).to.equal(true);
});

it('isSelect', () => {
  expect(isSelect(inputText)).to.equal(false);
  expect(isSelect(select)).to.equal(true);
});

it('isMedia', () => {
  expect(isMedia(img)).to.equal(false);
  expect(isMedia(video)).to.equal(true);
});

it('isRange', () => {
  expect(isRange(inputText)).to.equal(false);
  expect(isRange(rangeInput)).to.equal(true);
});

it('isAnyTypeOfDatePicker', () => {
  expect(isAnyTypeOfDatePicker(inputText)).to.equal(false);
  expect(isAnyTypeOfDatePicker(dateInput)).to.equal(true);
});

it('isDatePicker', () => {
  expect(isDatePicker(inputText)).to.equal(false);
  expect(isDatePicker(dateInput)).to.equal(true);
});

it('isDatetimePicker', () => {
  expect(isDatetimePicker(dateInput)).to.equal(false);
  expect(isDatetimePicker(datetimeInput)).to.equal(true);
});

it('isMonthPicker', () => {
  expect(isMonthPicker(dateInput)).to.equal(false);
  expect(isMonthPicker(monthInput)).to.equal(true);
});

it('isTimePicker', () => {
  expect(isTimePicker(dateInput)).to.equal(false);
  expect(isTimePicker(timeInput)).to.equal(true);
});

it('isWeekPicker', () => {
  expect(isWeekPicker(dateInput)).to.equal(false);
  expect(isWeekPicker(weekInput)).to.equal(true);
});

describe('isVisible', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should be false when element is unmounted', () => {
    expect(isVisible(a)).to.equal(false);
  });

  it('should be true when element is mounted', () => {
    container.appendChild(a);
    expect(isVisible(a)).to.equal(true);
  });

  it('should be false when element is transparent', () => {
    const a = document.createElement('a');
    a.style.opacity = 0;
    container.appendChild(a);
    expect(isVisible(a)).to.equal(false);
  });

  it('should be false when element is hidden', () => {
    const a = document.createElement('a');
    a.style.visibility = 'hidden';
    container.appendChild(a);
    expect(isVisible(a)).to.equal(false);
  });

  it('should be false when element is displayed outside the screen', () => {
    const a = document.createElement('a');
    a.style.top = '-999999px';
    a.style.position = 'absolute';
    container.appendChild(a);
    expect(isVisible(a)).to.equal(false);
  });
});

describe('getVisibleElementsInViewPort', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should returns visible elements', () => {
    const a1 = document.createElement('a');
    a1.id = '1';
    const a2 = document.createElement('a');
    a2.id = '2';
    a2.style.visibility = 'hidden';
    const a3 = document.createElement('a');
    a3.id = '3';

    container.appendChild(a1);
    container.appendChild(a2);
    container.appendChild(a3);

    const visibleElements = getVisibleElementsInViewPort('a');
    expect(visibleElements.length).to.equal(2);
    expect(visibleElements[0].id).to.equal('1');
    expect(visibleElements[1].id).to.equal('3');
  });
});

describe('getVisibleElementsInViewPortExpandedData', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should returns visible elements', () => {
    const a1 = document.createElement('a');
    a1.id = '1';
    const a2 = document.createElement('a');
    a2.id = '2';
    a2.style.visibility = 'hidden';
    const a3 = document.createElement('a');
    a3.id = '3';

    container.appendChild(a1);
    container.appendChild(a2);
    container.appendChild(a3);

    const visibleElements = getVisibleElementsInViewPortExpandedData('a');
    expect(visibleElements.length).to.equal(2);
    expect(visibleElements[0].el.id).to.equal('1');
    expect(visibleElements[1].el.id).to.equal('3');
    expect(visibleElements[0]).to.have.all.keys('el', 'rect', 'style');
  });
});

describe('getAllElementTypes', () => {
  it('should returns element types', () => {

    const elementTypes = getAllElementTypes();
    expect(elementTypes).to.have.all.keys('audio', 'button', 'checkbox',
    'color', 'datePicker', 'file', 'image', 'link', 'media', 'range',
    'radio', 'select', 'text', 'textInput', 'video', 'hasOnClickAttr');
  });
});

describe('isScrollable', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return false if element is not scrollable', () => {
    expect(isScrollable(container)).to.be.false; // eslint-disable-line no-unused-expressions
  });

  it('should return true if element is scrollable', () => {
    container.style = 'overflow-y:scroll;height:400px';
    let containerElement = document.createElement('div');
    containerElement.style = 'height:800px';
    container.appendChild(containerElement);
    expect(isScrollable(container)).to.be.true; // eslint-disable-line no-unused-expressions
  });
});

