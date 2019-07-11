import React from 'react';
import TopSection from './TopSection';
import './ViewTwo.scss';
import { Calendar } from '@progress/kendo-react-dateinputs';

const ViewTwo: React.FC = (props: React.Props<any>) => {
  return (
    <div className="">
    <div className="row">
      <div className="col-12"> 
        <TopSection/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
          <Calendar focusedDate={new Date(2010, 10, 10)} />
      </div>
      <div className="col-sm-6">
          {props.children}
      </div>
    </div>
  </div>
  );
};

export default ViewTwo;
