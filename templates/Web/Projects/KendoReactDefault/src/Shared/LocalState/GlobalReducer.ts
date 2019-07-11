import { localStateActions } from './LocalStateActions';

export const globalReducer = (state: any, action: any) => {
    if (localStateActions.hasOwnProperty(action.type) && action.type) {
        return localStateActions[action.type](state, action);
      } else {
        return state;
    }
};
