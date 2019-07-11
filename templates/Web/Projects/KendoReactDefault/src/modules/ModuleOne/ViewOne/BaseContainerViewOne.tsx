///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import React, { useContext } from 'react';
import { process } from '@progress/kendo-data-query';
import { LocalStateContext } from '../../application/app-layout/LocalStateProvider';
import BaseViewOne from './BaseViewOne';

const BaseContainerViewOne: React.FC = (props: any) => {
  const {localState, globalDispatch} = useContext(LocalStateContext);
  const dataInEdit = process(
    localState.grid524d465702174e8fadf0a553d2853698.gridData,
    localState.grid524d465702174e8fadf0a553d2853698.dataState).data;

  const events = {
    grid524d465702174e8fadf0a553d2853698: {
        onDataStateChange: (e: any) => {
          globalDispatch({ type: 'DATA_STATE', 
          component: 'grid524d465702174e8fadf0a553d2853698', dataState: e.data });
        },
        onRowClick: (e: any) => {
          globalDispatch({ type: 'GRID_BASIC_EDITING_EDIT_ID', 
          component: 'grid524d465702174e8fadf0a553d2853698', editID: e.dataItem.ProductID });
        },
        onItemChange: (e: any) => {
          globalDispatch({ type: 'GRID_BASIC_EDITING_CHANGE_ITEM',
          component: 'grid524d465702174e8fadf0a553d2853698', 
          initialData: localState.grid524d465702174e8fadf0a553d2853698.gridData, gridData: e.data, event: e });
        }
    }
  };

  const localStateBasedProps = {
    grid524d465702174e8fadf0a553d2853698: {
        total: localState.grid524d465702174e8fadf0a553d2853698.gridData.length,
         ...localState.grid524d465702174e8fadf0a553d2853698.dataState
    }
  };

  const dataItems = {
    grid524d465702174e8fadf0a553d2853698: {
      data: dataInEdit.map((item) => {
        item.inEdit = item.ProductID === localState.grid524d465702174e8fadf0a553d2853698.editID;
        return item;
      })
    }
  };

  const localStateProps = {
    grid524d465702174e8fadf0a553d2853698: {
      ...events.grid524d465702174e8fadf0a553d2853698,
      ...localStateBasedProps.grid524d465702174e8fadf0a553d2853698,
      ...dataItems.grid524d465702174e8fadf0a553d2853698
    }
  };

  return (
    <BaseViewOne 
      {...props}
      localStateProps={localStateProps}
      customEvent={props.customEvent}
    />
  );
};

export default BaseContainerViewOne;
