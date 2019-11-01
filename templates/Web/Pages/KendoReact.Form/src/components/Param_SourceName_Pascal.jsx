import React from 'react';

const Param_SourceName_Pascal = (props) => {
    return (
        <div className="container-fluid">
            <div className='row my-4'>
                <div className='col-12 col-lg-9 border-right'>
                    <div className="row example-wrapper">
                        <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                            <div className="card">
                                <div className="card-block">
                                    <form className="k-form">
                                        <fieldset>
                                            <legend>User Details</legend>

                                            <label className="k-form-field">
                                                <span>First Name</span>
                                                <input className="k-textbox" placeholder="Your Name" />
                                            </label>
                                            <label className="k-form-field">
                                                <span>Last Name</span>
                                                <input className="k-textbox" placeholder="Your Last Name" />
                                            </label>
                                            <div className="k-form-field">
                                                <span>Gender</span>

                                                <input type="radio" name="gender" id="female" className="k-radio" />
                                                <label className="k-radio-label" htmlFor="female">Female</label>

                                                <input type="radio" name="gender" id="male" className="k-radio" />
                                                <label className="k-radio-label" htmlFor="male">Male</label>
                                            </div>
                                            <label className="k-form-field">
                                                <span>Email <span className="k-required">*</span></span>
                                                <input type="email" className="k-textbox" placeholder="Your Email" />
                                            </label>
                                            <label className="k-form-field">
                                                <span>Company<span className="k-field-info">optional</span></span>
                                                <input className="k-textbox" placeholder="Your Company" />
                                            </label>
                                        </fieldset>

                                        <fieldset>
                                            <legend>Credentials</legend>
                                            <label className="k-form-field">
                                                <span>Username</span>
                                                <input className="k-textbox" placeholder="Your username" />
                                            </label>
                                            <label className="k-form-field">
                                                <span>Password</span>
                                                <input type="password" className="k-textbox" placeholder="Your password" />
                                            </label>
                                            <label className="k-form-field">
                                                <input type="checkbox" id="auth-2fa" className="k-checkbox" />
                                                <label className="k-checkbox-label" htmlFor="auth-2fa">Enable two-factor authentication</label>
                                            </label>
                                        </fieldset>

                                        <div className="text-right">
                                            <button type="button" className="k-button">Cancel</button> &nbsp;
                                <button type="button" className="k-button k-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoReact Chart</h3>
                    <p>KendoReact includes a wide offering of UI components that can be used to build forms, including CSS classes to easily create and structure gorgeous forms.</p>
                    <p>All inputs get validated upon form submission and if the validation fails, the form submission is prevented. Out of the box, KendoReact delivers components which support the HTML5 form validation and also provide props for configuring a set of minimal requirements for a component to be in a valid state.</p>
                </div>
            </div>
        </div>
    )
}

export default Param_SourceName_Pascal;