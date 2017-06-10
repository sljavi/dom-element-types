# DOM element types

Dom element type validations and visibility queries

## Install

```
npm install dom-element-types
```

## Usage

```javascript
import { isTextInput } from 'dom-element-types';

const passwordFieldElement = document.querySelector('input[type=password]');
isTextInput(passwordFieldElement); //true
```

## DOM element type validations

DOM elements could be classified by its purpose using the following functions.

Example

```javascript
import { isTextInput } from 'dom-element-types';

const someEditableBox = document.querySelector('div[contentEditable]');
isTextInput(someEditableBox); //true
```

### Functions

#### isImage
Matches `img` dom elements

#### isLink
Matches `a` and `[role=link]` dom elements

#### isText
Matches the following elements:
 * `p`
 * `h1`
 * `h2`
 * `h3`
 * `h4`
 * `h5`
 * `h6`
 * `ul`
 * `ol`
 * `dl`
 * `dt`
 * `li`
 * `dd`
 * `table`
 * `code`
 * `pre`
 * `blockquote`
 * `span`


#### isTextInput
Matches the following elements:
 * `datalist`
 * `input[type=number]`
 * `input[type=email]`
 * `input[type=password]`
 * `input[type=search]`
 * `input[type=tel]`
 * `input[type=text]`
 * `input[type=url]`
 * `textarea`
 * `[role=listbox]`
 * `[role=spinbutton]`
 * `[role=textbox]`
 * `[role=searchbox]`
 * `[role=combobox]`
 * `[contentEditable]`

#### isMultilineTextInput
Matches `textarea` and `[contentEditable]` elements

#### isColorInput
Matches `input[type=color]` element

#### isSelect
Matches the following elements:
 * `select`
 * `keygen`
 * `[role=listbox]`

#### isMedia
Matches `audio` and `video` elements

#### isRange
Matches `input[type=range]` and `[role=slider]` elements

#### isAnyTypeOfDatePicker
Matches the following elements:
 * `input[type=date]`
 * `input[type=time]`
 * `input[type=datetime]`
 * `input[type=datetime-local]`
 * `input[type=month]`
 * `input[type=week]`

#### isDatePicker
Matches `input[type=date]` element

#### isDatetimePicker
Matches `input[type=datetime]` and `input[type=datetime-local]` elements

#### isMonthPicker
Matches `input[type=month]` element

#### isTimePicker
Matches `input[type=time]` element

#### isWeekPicker
Matches `input[type=week]` element

## Visibility queries

The following functions are useful to get all the visible DOM elements present in the screen (port view).


### Example

```javascript
import {
  getVisibleElementsInViewPort,
  isVisible
} from 'dom-element-types';

const visibleButtons = getVisibleElementsInViewPort('button');
isVisible(visibleButtons[0]); // true
```

### Functions

#### isVisible
The function `isVisible` expects as a parameter a DOM element.
It will check if the element:
 * is rendered inside the screen area
 * is not transparent (opacity > 0)
 * is visible (visibility !== 'hidden')

#### getVisibleElementsInViewPort
It returns an array of elements visible in the screen.
The function `getVisibleElementsInViewPort` expects as a non required parameter a valid [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). Defaults to `*`.

#### getVisibleElementsInViewPortExpandedData
Same as `getVisibleElementsInViewPort` but for each returned element it also returns the `boundingClientRect` and `computedStyle`.

## Custom validations
In order to create custom validations the user can get all the element type selectors classified by purpose.

#### getAllElementTypes
Returns an element type selectors map composed of the following types:
 * audio
 * button
 * checkbox
 * color
 * datePicker
 * file
 * image
 * link
 * media
 * range
 * radio
 * select
 * text
 * textInput
 * video
 * hasOnClickAttr

```javascript
import { getAllElementTypes } from 'dom-element-types';

console.log(getAllElementTypes());
```

## TODO
* Tests are coming
