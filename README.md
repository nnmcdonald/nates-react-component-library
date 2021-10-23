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

A custom checkbox, uses a swappable Font Awesome icon for the checkmark.

#### Props
| Name | Required | Type | Default Value | Description |
|------|----------|------|---------------|-------------|
| label | No | string | "" | A string used to label the checkbox. |
| checkIcon | No | string | "fas fa-check" | This specifies the font-awesome classes to be used for the checkbox icon, the default is a solid checkmark. |
| checked | No | bool | false | Specifies if the checkbox input should be 'checked' when the component is rendered. |
| onChange | No | function | N/A | A function to be called when the checkbox changes, i.e. is clicked. |

```jsx
// Default
<Checkbox 
    onChange={clickHandler}
    label="Would you like to subscribe to our newsletter?"
    checked={true}
/>

// or with a custom icon
<Checkbox
    onChange={clickHandler}
    label="Would you like to subscribe to our newsletter?"
    checkIcon="fas fa-times"
    checked={true}
/>
```

### `LeadForm`
```
import { LeadForm } from 'nates-react-component-library'
```

This is a generic form for collecting basic sales lead/contact information.

#### Props
| Name | Required | Type | Default Value | Description |
|------|----------|------|---------------|-------------|
| onSubmit | Yes | function | N/A | This function is called when the form is submitted, it should take a single argument for the event data. |
| formH1 | No | string | "Contact Form" | A string value to be displayed in the h1 tag of the form. |
| formDescription | No | string | "" | A string that will be displayed at the top of the form under the h1 tag. |
| firstName | No | Boolean or Object | { label: "First Name", required: false, error: false } | If true then the firstName input field will be rendered with default values. |
| lastName | No | Boolean or Object | { label: "Last Name", required: false, error: false } | If true then the lastName input field will be rendered with default values. |
| generalPhone | No | Boolean or Object | { label: "Phone", required: false, error: false } | If true then the generalPhone input field will be rendered with default values. |
| mobilePhone | No | Boolean or Object | { label: "Mobile Phone", required: false, error: false } | If true then the mobilePhone input field will be rendered with default values. |
| workPhone | No | Boolean or Object | { label: "Work Phone", required: false, error: false } | If true then the workPhone input field will be rendered with default values. |
| email | No | Boolean or Object | { label: "Email", required: false, error: false }| If true then the email input field will be rendered with default values. |

```jsx
// With just basic fields
<LeadForm
    onSubmit={submitHandler}
    formH1="Example Form"
    formDescription="This is an example of a basic lead form."
    firstName={{label: "First Name", required: true, error: this.state.errors.firstName}}
    lastName={{label: "Last Name", required: true, error: this.state.errors.lastName}}
    generalPhone={{label: "Phone (home)", required: false}}
    mobilePhone={{label: "Phone (mobile)", required: false}}
    workPhone={{label: "Work Phone", required: false}}
    email={{label: "Email", required: true, error: this.state.errors.email}}
/>

// With only specific basic inputs and additional custom inputs
<LeadForm
    formH1="Enter a Raffle"
    formDescription="This is a second example where a user might enter a raffle."
    firstName={{label: "First Name", required: true, error: this.state.errors.firstName}}
    lastName={true}
    email={{label: "Email", required: true, error: this.state.errors.email}}
>
    <div className="LeadForm__formGroup">
        <div className='LeadForm__formControl'>
            <label htmlFor="cst-rewards-num">Customer Rewards Number</label>
            {
                this.state.errors.cstRewardsNumber ?
                <span className="error-msg">
                    {this.state.errors.cstRewardsNumber}
                </span>
                : ''
            }
            <input id="cst-rewards-num" name="cst-rewards-num" type="text" />
        </div>
        <div className="LeadForm__formControl">
            <label htmlFor="first-name-input">State of Residence</label>
            {
                this.state.errors.residenceState ?
                <span className="error-msg">
                    {this.state.errors.residenceState}
                </span>
                : ''
            }
            <input id="state-input" type="text" name="state" />
        </div>
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

### `SearchBar`
```
import { SearchBar } from 'nates-react-component-library'
```

This is a basic search bar with a text input field and a submit button. 
Note: the input and button styling may be adjusted with the classes 'searchInput--custom' and 'searchButton--custom' respectively.

#### Props
| Name | Required | Type | Default Value | Description |
|------|----------|------|---------------|-------------|
| onSearch | Yes | function | N/A | This function should process the search, it should expect one argument of type string for the query submitted. |

```jsx
searchHandler = (query) => {
    // Do something with the query string.
}

<SearchBar onSearch={this.searchHandler} />
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
