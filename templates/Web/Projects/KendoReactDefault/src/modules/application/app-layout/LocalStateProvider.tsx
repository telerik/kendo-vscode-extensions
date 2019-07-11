import React, { useReducer } from 'react';
import { globalReducer } from '../../../Shared/LocalState/GlobalReducer';
import { initialLocalState } from '../../../Shared/LocalState/InitialLocalState';

const LocalStateContext = React.createContext(initialLocalState);
const LocalStateProvider: React.FC = (props: any) => {
    const [localState, globalDispatch] = useReducer(globalReducer, initialLocalState);

    return (
            <LocalStateContext.Provider value={{ localState, globalDispatch }}>
                 {props.children}
            </LocalStateContext.Provider>
    );
};

export { LocalStateContext, LocalStateProvider };
