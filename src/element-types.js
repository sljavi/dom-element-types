import _ from 'lodash';

export const datePickers = {
  date: 'input[type=date]',
  time: 'input[type=time]',
  datetime: 'input[type=datetime]',
  datetimeLocal: 'input[type=datetime-local]',
  month: 'input[type=month]',
  week: 'input[type=week]'
};

export const textInputs = {
  datalist: 'datalist',
  listbox: '[role=listbox]',
  number: 'input[type=number]',
  numberSpinButton: '[role=spinbutton]',
  emailInput: 'input[type=email]',
  textBox: '[role=textbox]',
  seachBox: '[role=searchbox]',
  comboBox: '[role=combobox]',
  password: 'input[type=password]',
  search: 'input[type=search]',
  tel: 'input[type=tel]',
  text: 'input[type=text]',
  url: 'input[type=url]',
  textarea: 'textarea',
  contentEditable: '[contentEditable]'
};

export const elementTypes = {
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
  color: ['input[type=color]'],
  datePicker: _.values(datePickers),
  file: ['input[type=file]'],
  image: ['img'],
  link: [
    'a',
    '[role=link]'
  ],
  media: ['audio', 'video'],
  range: [
    'input[type=range]',
    '[role=slider]'
  ],
  radio: [
    'input[type=radio]',
    '[role=radio]',
    '[role=menuitemradio]'
  ],
  select: [
    'select',
    'keygen',
    '[role=listbox]'
  ],
  text: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'dl', 'dt', 'li', 'dd', 'table', 'code', 'pre', 'blockquote', 'span'],
  textInput: _.values(textInputs),
  video: ['video'],
  hasOnClickAttr: ['[onclick]']
};
