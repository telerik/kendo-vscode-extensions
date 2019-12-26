import React from 'react';

const FormContainer = (props) => {
    return (
        <div className='col-12 col-lg-9 border-right'>
            <div className="row example-wrapper">
                <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                    <div className="card">
                        <div className="card-block">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormContainer;