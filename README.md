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

#### Props
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

This is a generic form for collecting basic sales lead/contact information.

#### Props
| Name | Required | Description |
|------|----------|-------------|
| firstName | No | If true then the firstName input field will be rendered. |
| lastName | No | If true then the lastName input field will be rendered. |
| generalPhone | No | If true then the generalPhone input field will be rendered. |
| mobilePhone | No | If true then the mobilePhone input field will be rendered. |
| email | No | If true then the email input field will be rendered. |
| address | No | If true then the address input field will be rendered. |
| zip | No | If true then the zip input field will be rendered. |

```jsx
// With just basic fields
<LeadForm
    firstName={true}
    lastName={true}
    generalPhone={true}
    mobilePhone={true}
    email={true}
    address={true}
    zip={true}
/>

// With only specific basic inputs and an additional custom input
<LeadForm
    firstName={true}
    lastName={true}
>
    <div className='formControl'>
        <label for="cst-rewards-num">Customer Rewards Number</label>
        <input id="cst-rewards-num" name="cst-rewards-num" type="text" />
    </div>
</LeadForm>
```

### `LoadScreen`
```
import { LoadScreen } from 'nates-react-component-library'
```

This component may be used to indicate a loading state. It overlays the full width and height of it's container and displays the text "Loading..." with a simple animation.

#### Props
none

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
