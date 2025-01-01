# Cosmo Picker

Cosmo Picker is a lightweight and highly customizable date picker designed for React applications.

![](https://i.ibb.co/RSsxV9P/calendar.png)

## Installation

You can install the package via [npm](https://github.com/npm/cli):

```
npm install cosmo-picker
```

You can also use [yarn](https://github.com/yarnpkg/yarn):

```
yarn add cosmo-picker
```

To use Cosmo Date Picker, make sure you have React and ReactDOM installed in your project. These are listed as peer dependencies, so you’ll need to install them separately if they are not already part of your project.

Below is a simple example of how to integrate Cosmo Date Picker into a React application.

```
import { useState } from 'react';
import { CosmoPicker } from 'cosmo-picker';

function App () {

  const [date, setDate] = useState('')

  return (
    <div>
      <CosmoPicker
        value={date}
        onChange={setDate}
      />
    </div>
  )
}

export default App
```

## Configuration

The most basic usage of CosmoPicker is as follows:

```
<CosmoPicker value={date} onChange={setDate}/>
```

You need to provide a date value and an onChange function to handle updates. CosmoPicker operates on string-based values, so the date should be managed as a string in your state.

## Props

| Property                     | Type     | Default Value | Description                                                                    |
| ---------------------------- | -------- | ------------- | ------------------------------------------------------------------------------ |
| `value`                      | string   | `''`          | The current date value in string format.                                       |
| `onChange`                   | function | `undefined`   | Callback function triggered when the date value changes.                       |
| `icon`                       | boolean  | `false`       | Displays an icon at the end of the input field when set to `true`.             |
| `iconColor`                  | string   | `black`       | Sets the color of calendar icon in the calendar.                               |
| `startYear`                  | number   | `undefined`   | Defines the first selectable year in the calendar.                             |
| `endYear`                    | number   | `undefined`   | Defines the last selectable year in the calendar.                              |
| `dayBorderRadius`            | string   | `'5px'`       | Specifies the border-radius of each day cell in the calendar view.             |
| `inputWidth`                 | string   | `'28rem'`     | Sets the width of the input field, allowing flexible customization.            |
| `inputFontSize`              | string   | `'1rem'`      | Specifies the font size for the text displayed inside the input field.         |
| `inputFontWeight`            | string   | `'400'`       | Defines the font weight for the text displayed inside the input field.         |
| `inputBackgroundColor`       | string   | `'white'`     | Sets the background color of the input field.                                  |
| `inputTextColor`             | string   | `'black'`     | Specifies the text color inside the input field.                               |
| `placeholderColor`           | string   | `'#9ca3af'`   | Sets the color of the placeholder text in the input field.                     |
| `calendarBackgroundColor`    | string   | `'white'`     | Defines the background color of the calendar.                                  |
| `calendarFontWeight`         | string   | `'600'`       | Specifies the font weight for text displayed in the calendar.                  |
| `yearBackgroundColor`        | string   | `'#f3f4f6'`   | Sets the background color for the year selection area.                         |
| `calendarTextColor`          | string   | `'black'`     | Specifies the text color in the calendar.                                      |
| `dayBackgroundColor`         | string   | `'#f3f4f6'`   | Sets the background color for individual day cells in the calendar.            |
| `dayHoverColor`              | string   | `'#d1d5db'`   | Defines the hover color for individual day cells.                              |
| `yearHoverColor`             | string   | `'#d1d5db'`   | Sets the hover color for the year selection.                                   |
| `selectedDayBackgroundColor` | string   | `'black'`     | Defines the background color for the selected day.                             |
| `selectedDayTextColor`       | string   | `'white'`     | Specifies the text color for the selected day.                                 |
| `arrowColor`                 | string   | `'black'`     | Sets the color of navigation arrows in the calendar.                           |
| `arrowHoverColor`            | string   | `'#e5e7eb'`   | Defines the hover color for navigation arrows.                                 |
| `scrollBarColor`             | string   | `'#bbbbbb'`   | Sets the color of the scroll bar within the calendar.                          |
| `zIndex`                     | number   | `100`         | Sets the z-index of the date picker to control its stacking order on the page. |

## LICENSE

Copyright (c) 2024 Emirhan Körhan and individual contributors. Licensed under the MIT license, see LICENSE for the full license.
