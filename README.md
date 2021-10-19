## Installing this package in a React project

Run the following command to install this package, replacing '#v1.1.0' will install the corresponding release.

```
npm install https://github.com/nnmcdonald/nates-react-component-library#v1.1.0
```

## Available Components

These React components are exported by this package and may be imported in other projects.

### `Checkbox`
```
import { Checkbox } from 'nates-react-component-library'
```

A custom checkbox, uses a Font Awesome icon by default for the checkmark but may be customized further.

| Props |
| ----- |
| Name | Required | Description |
|------|----------|-------------|
| defaultChecked | No | Specifies if the checkbox input should be 'checked' when the component is rendered. |

```jsx
// Default
<Checkbox
    defaultChecked={this.state.checkboxIsSelected}
/>

// or with a custom icon
<Checkbox
    defaultChecked={this.state.checkboxIsSelected}
>
    <span>√</span>
</Checkbox>
```

### `LeadForm`
```
import { LeadForm } from 'nates-react-component-library'
```

### `LoadScreen`
```
import { LoadScreen } from 'nates-react-component-library'
```

This component may be used to indicate a loading state. It overlays the full width and height of it's container and displays the text "Loading..." with a simple animation.

Props: none

```jsx
{
    this.state.isLoading ? <LoadScreen/> : ''
}
```

## Available Development Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the package for production and outputs to the `dist` folder. It does this by processing the 'src/lib/' folder with Babel.
