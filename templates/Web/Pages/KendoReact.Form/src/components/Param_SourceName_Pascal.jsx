import React, { useState } from 'react';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import FormContainer from './FormContainer';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? "" : "Please enter a valid email.");

const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {
                visited && validationMessage &&
                (<div className={"k-required"}>{validationMessage}</div>)
            }
        </div>
    );
};

const Param_SourceName_Pascal = (props) => {
    const initialForm = {
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        email: '',
        company: '',
        userName: '',
        password: '',
        twoFactor: false
    };
    const [showDialog, setShowDialog] = useState(false)

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    }

    const handleSubmit = () => {
        setShowDialog(!showDialog);
    }

    return (
        <div className="container-fluid">
            {showDialog && <Dialog onClose={toggleDialog}>
                <p style={{ margin: "25px", textAlign: "center" }}>The form is successfully submitted!</p>
                <DialogActionsBar>
                    <button className="k-button" onClick={toggleDialog}>OK</button>
                </DialogActionsBar>
            </Dialog>}
            <div className='row my-4'>
                <FormContainer>
                    <Form
                        initialValues={initialForm}
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <form onSubmit={formRenderProps.onSubmit} className={'k-form'}>
                                <fieldset>
                                    <legend>User Details</legend>
                                    <div>
                                        <Field name={'firstName'} component={Input} label={'First name'} />
                                    </div>
                                    <div>
                                        <Field name={'lastName'} component={Input} label={'Last name'} />
                                    </div>
                                    <div style={{ marginTop: "1rem" }}>
                                        <Field name={'dateOfBirth'} component={DatePicker} label={'Date of Birth'} />
                                    </div>
                                    <div>
                                        <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
                                    </div>
                                    <div>
                                        <Field name={'company'} component={Input} label={'Your Company'} />
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Credentials</legend>
                                    <div>
                                        <Field name={'userName'} component={Input} label={'Username'} placeholder="Your username" />
                                    </div>
                                    <div>
                                        <Field name={'password'} component={Input} label={'Password'} placeholder="Your password" />
                                    </div>
                                    <div style={{ marginTop: "1rem" }}>
                                        <Field name={'twoFactor'} component={Checkbox} label={'Enable two-factor authentication'} />
                                    </div>
                                </fieldset>

                                <div className="text-right">
                                    <button type="button" className="k-button" onClick={formRenderProps.onFormReset}>Clear</button> &nbsp;
                                    <button type="submit" className="k-button k-primary" disabled={!formRenderProps.allowSubmit}>Submit</button>
                                </div>
                            </form>
                        )} />
                </FormContainer>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoReact Forms</h3>
                    <p>KendoReact includes a wide offering of UI components that can be used to build forms, including CSS classes to easily create and structure gorgeous forms.</p>
                    <p>The required inputs get validated upon form submission and if the validation fails, the form submission is prevented. Out of the box, KendoReact delivers components which support the HTML5 form validation and also provide props for configuring a set of minimal requirements for a component to be in a valid state.</p>
                    <p>For documentation and demos of the many form-friendly components please visit their documentation (<a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext"> Date Inputs</a>, <a href="https://www.telerik.com/kendo-react-ui/components/dropdowns/?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext"> DropDowns</a>, <a href="https://www.telerik.com/kendo-react-ui/components/inputs/?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext">Inputs</a> etc).</p>
                </div>
            </div>
        </div>
    )
}

export default Param_SourceName_Pascal;