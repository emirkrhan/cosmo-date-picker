# Cosmo Date Picker

Cosmo Picker is a lightweight and highly customizable date picker designed for React applications.

![](https://i.ibb.co/RSsxV9P/calendar.png)

## Installation

You can install the package via [npm](https://github.com/npm/cli):

```
npm install cosmo-date-picker
```

You can also use [yarn](https://github.com/yarnpkg/yarn):

```
yarn add cosmo-date-picker
```

To use Cosmo Date Picker, make sure you have React and ReactDOM installed in your project. These are listed as peer dependencies, so you’ll need to install them separately if they are not already part of your project.

Below is a simple example of how to integrate Cosmo Date Picker into a React application.

```
import { useState } from 'react';
import { CosmoPicker } from 'cosmo-date-picker';

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
<CosmoPicker value={date} onChange={setDate}
/>
```

You need to provide a date value and an onChange function to handle updates. CosmoPicker operates on string-based values, so the date should be managed as a string in your state.

## Props

| Property          | Type     | Default Value | Description                                                            |
| ----------------- | -------- | ------------- | ---------------------------------------------------------------------- |
| `value`           | string   | `''`          | The current date value in string format.                               |
| `onChange`        | function | `undefined`   | Callback function triggered when the date value changes.               |
| `icon`            | boolean  | `true`        | Displays an icon at the end of the input field when set to `true`.     |
| `startYear`       | number   | `undefined`   | Defines the first selectable year in the calendar.                     |
| `endYear`         | number   | `undefined`   | Defines the last selectable year in the calendar.                      |
| `dayBorderRadius` | string   | `5px`         | Specifies the border-radius of each day cell in the calendar view.     |
| `inputWidth`      | string   | `'18rem'`     | Sets the width of the input field, allowing flexible customization.    |
| `inputFontSize`   | string   | `'0.75rem'`   | Specifies the font size for the text displayed inside the input field. |
| `inputFontWeight` | string   | `'500'`       | Defines the font weight for the text displayed inside the input field. |

## LICENSE

Copyright (c) 2024 Emirhan Körhan and individual contributors. Licensed under the MIT license, see LICENSE for the full license.
