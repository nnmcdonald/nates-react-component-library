import { LeadForm } from '../lib/components/LeadForm/LeadForm';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Test components here */ }
      <LeadForm 
        onSubmit={() => console.log("TEST")}
        formDescription="This is a test"
        firstName={{label: "First Name", required: true}}
        lastName={{label: "Last Name", required: true}}
        generalPhone={true}
        mobilePhone={true}
        workPhone={true}
        email={true}
      >
        <div className="LeadForm__formGroup">
          <div className="LeadForm__formControl">
            <label htmlFor="first-name-input">State of Residence</label>
            <input id="state-input" type="text" name="state" />
          </div>
        </div>
      </LeadForm>
    </div>
  );
}

export default App;
