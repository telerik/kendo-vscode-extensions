import React from 'react';
import { Redirect } from 'react-router';

const ModuleTwo: React.FC = () => {
  return (
    <div>
      <h1>ModuleTwo</h1>
      <Redirect exact={true} from="/moduletwo" to="/moduletwo/viewone" />
    </div>
  );
};

export default ModuleTwo;
