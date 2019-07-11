import React from 'react';
import TopSection from './TopSection';
import './ViewOne.scss';

const ViewOne: React.FC = (props: React.Props<any>) => {
  return (
    <div className="">
    <div className="row">
      <div className="col-12">
        <TopSection/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <h1>Module two - ViewOne</h1>
      </div>
      <div className="col-sm-6">
          {props.children}
      </div>
    </div>
  </div>
  );
};

export default ViewOne;
