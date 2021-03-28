import { createStore, Reducer } from "redux";


// Interfaces
export interface IState {
    CurrentSection: number;
}

export enum ActionType {
    ChangedSection
};

export interface IAction {
    type: ActionType;
    data: { [key: string]: any };
};


// Main component
const initialState: IState = {
    CurrentSection: 0,
};

const MainReducer: Reducer<IState, IAction> = (state: IState | undefined = initialState, action: IAction): IState => {
    switch (action.type)
    {
        case ActionType.ChangedSection:
            {
                state.CurrentSection = action.data.currentSection;
                return state;
            }
            break;

        default:
            return state;
    }
};

export const Store = createStore(MainReducer);

