/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import React, { useContext } from 'react';
import BaseContainerViewOne from './BaseContainerViewOne';
import propsConfig from './propsConfig';
import { LocalStateContext } from '../../application/app-layout/LocalStateProvider';

const ViewOneContaner: React.FC = (props: React.Props<any>) => {
  const {globalDispatch} = useContext(LocalStateContext);

  const handleRowClick = (e: any, someKey: any) => {
    alert('custom');
    globalDispatch({ type: 'GRID_BASIC_EDITING_EDIT_ID', 
    component: 'grid524d465702174e8fadf0a553d2853698', editID: e.dataItem.ProductID });
  };

  return (
  <BaseContainerViewOne 
    {...props} 
    {... propsConfig.components} 
    customEvent={handleRowClick}
  />
  );
};

export default ViewOneContaner;
