export const localStateActionsBase = {
    DATA_STATE: function(state: any, action: any) {
        return {...state, [action.component]: {...state[action.component], dataState: action.dataState}};
    },
    GRID_BASIC_EDITING_EDIT_ID: function(state: any, action: any) {
        return {...state, [action.component]: {...state[action.component], editID: action.editID}};
    },
    GRID_BASIC_EDITING_CHANGE_ITEM: function(state: any, action: any) {
        const gridDataCopy = state[action.component].gridData.slice();
        const index = state[action.component].gridData.findIndex(
            (d: any) => d.ProductID === action.event.dataItem.ProductID);
        gridDataCopy[index] = { ...action.initialData[index], [action.event.field]: action.event.value };
        
        return {...state, [action.component]: {...state[action.component], gridData: gridDataCopy}};
    }
};
