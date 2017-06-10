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

### Functions

#### isImage
Matches `img` dom elements

```javascript
import { isImage } from 'dom-element-types';

const someImage = document.querySelector('img');
isImage(someImage); //true
```

#### isLink
Matches `a` and `[role=link]` dom elements

```javascript
import { isLink } from 'dom-element-types';

const someLink = document.querySelector('a');
isLink(someLink); //true
```

#### isText
Matches the following text elements: `p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `ul`, `ol`, `dl`, `dt`, `li`, `dd`, `table`, `code`, `pre`, `blockquote` and `span`

```javascript
import { isText } from 'dom-element-types';

const someTitle = document.querySelector('h2');
isText(someTitle); //true
```

#### isTextInput
Matches the following text inputs elements: `datalist`, `input[type=number]`, `input[type=email]`, `input[type=password]`, `input[type=search]`, `input[type=tel]`, `input[type=text]`, `input[type=url]`, `textarea`, `[role=listbox]`, `[role=spinbutton]`, `[role=textbox]`, `[role=searchbox]`, `[role=combobox]`, `[contentEditable]`

```javascript
import { isTextInput } from 'dom-element-types';

const someEmailField = document.querySelector('input[type=email]');
isTextInput(someEmailField); //true
```

#### isMultilineTextInput
Matches `textarea` and `[contentEditable]` elements

```javascript
import { isMultilineTextInput } from 'dom-element-types';

const someBoxContainer = document.querySelector('div[contentEditable]');
isMultilineTextInput(someBoxContainer); //true
```

#### isColorInput
Matches `input[type=color]` element

```javascript
import { isColorInput } from 'dom-element-types';

const someColorField = document.querySelector('input[type=color]');
isColorInput(someColorField); //true
```

#### isSelect
Matches the following list elements: `select`, `keygen` and `[role=listbox]`

```javascript
import { isSelect } from 'dom-element-types';

const someList = document.querySelector('select');
isSelect(someList); //true
```

#### isMedia
Matches `audio` and `video` elements

```javascript
import { isVideo } from 'dom-element-types';

const someVideo = document.querySelector('video');
isVideo(someVideo); //true
```

#### isRange
Matches `input[type=range]` and `[role=slider]` elements

```javascript
import { isRange } from 'dom-element-types';

const someRange = document.querySelector('input[type=range]');
isRange(someRange); //true
```

#### isAnyTypeOfDatePicker
Matches the following datepicker elements: `input[type=date]`, `input[type=time]`, `input[type=datetime]`, `input[type=datetime-local]`, `input[type=month]` and `input[type=week]`

```javascript
import { isAnyTypeOfDatePicker } from 'dom-element-types';

const sameDatePicker = document.querySelector('input[type=date]');
isAnyTypeOfDatePicker(sameDatePicker); //true
```

#### isDatePicker
Matches `input[type=date]` element

```javascript
import { isDatePicker } from 'dom-element-types';

const sameDatePicker = document.querySelector('input[type=date]');
isDatePicker(sameDatePicker); //true
```

#### isDatetimePicker
Matches `input[type=datetime]` and `input[type=datetime-local]` elements

```javascript
import { isDatetimePicker } from 'dom-element-types';

const sameDatePicker = document.querySelector('input[type=datetime]');
isDatetimePicker(sameDatePicker); //true
```

#### isMonthPicker
Matches `input[type=month]` element

```javascript
import { isMonthPicker } from 'dom-element-types';

const sameDatePicker = document.querySelector('input[type=month]');
isMonthPicker(sameDatePicker); //true
```

#### isTimePicker
Matches `input[type=time]` element

```javascript
import { isTimePicker } from 'dom-element-types';

const sameDatePicker = document.querySelector('input[type=time]');
isTimePicker(sameDatePicker); //true
```

#### isWeekPicker
Matches `input[type=week]` element

```javascript
import { isWeekPicker } from 'dom-element-types';

const sameDatePicker = document.querySelector('input[type=week]');
isWeekPicker(sameDatePicker); //true
```

## Visibility queries

The following functions are useful to get all the visible DOM elements present in the screen (port view).

### Functions

#### isVisible
The function `isVisible` expects as a parameter a DOM element.
It will check if the element:
 * is rendered inside the screen area
 * is not transparent (opacity > 0)
 * is visible (visibility !== 'hidden')

```javascript
import { isVisible } from 'dom-element-types';

const visibleButton = document.querySelector('button');
isVisible(visibleButton); // true
```

#### getVisibleElementsInViewPort
It returns an array of elements visible in the screen.
The function `getVisibleElementsInViewPort` expects as an optional parameter a valid [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) otherwise defaults to `'*'`.

```javascript
import {
  getVisibleElementsInViewPort,
  isVisible
} from 'dom-element-types';

const visibleButtons = getVisibleElementsInViewPort('button');
isVisible(visibleButtons[0]); // true
```

#### getVisibleElementsInViewPortExpandedData
Same as `getVisibleElementsInViewPort` function but for each returned element it also returns the `boundingClientRect` and `computedStyle`.

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
/*
 Returns:
 {
  audio: ['audio'],
  button: [
    'button',
    'input[type=button]',
    'input[type=reset]',
    'input[type=submit]',
    '[role=button]',
    '[role=menuitem]',
    '[role=option]'
  ],
  checkbox: [
    'input[type=checkbox]',
    '[role=checkbox]',
    '[role=menuitemcheckbox]'
  ],
  ...
}
*/
```
[Check out the full map](https://github.com/sljavi/dom-element-types/blob/master/src/element-types.js)

## TODO
* Tests are coming
