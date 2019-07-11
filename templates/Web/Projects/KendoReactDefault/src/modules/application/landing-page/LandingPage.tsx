import React from 'react';
import { Link } from 'react-router-dom';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

const LandingPage: React.FC = (props: React.Props<any>) => {
  let iStyles = { background: 'rgb(0, 162, 232)', color: 'rgb(255, 255, 255)'};

  return (
    <div className="App kb-modules-list-wrapper">
      <TopSection/>
      <Link to="/moduleone" className="kb-module-thumbnail" title="undefined">
        <i className="fa fa-bank" style={iStyles} />
      <span title="Templates">ModuleOne</span>
      </Link>
      <Link to="/moduletwo" className="kb-module-thumbnail" title="undefined">
        <i className="fa fa-bank" style={iStyles} />
      <span title="Templates">ModuleTwo</span>
      </Link>
      <BottomSection/>
  </div>
  );
};

export default LandingPage;
