import { useReducer } from "react";

type TDatalist = string[];

interface State {
  query: string;
  datalist: TDatalist;
  datalistCopy: TDatalist;
  selected: TDatalist;
}

enum Action {
  RESET,
  CREATE,
  ADD,
  REMOVE,
  FILTER,
}

const initialArg: State = {
  query: "",
  datalist: [],
  datalistCopy: [],
  selected: [],
};

function reducer(
  state: State,
  action: { type: Action; payload?: unknown }
): State {
  switch (action.type) {
    case Action.RESET: {
      return { ...state, selected: [] };
    }
    case Action.CREATE: {
      let datalist = action.payload as TDatalist;
      return { ...state, datalist, datalistCopy: datalist };
    }
    case Action.ADD: {
      let item = action.payload as string;
      return { ...state, selected: [...state.selected, item] };
    }
    case Action.REMOVE: {
      let item = action.payload as string;
      let selected = state.selected.filter((el) => el !== item);
      return { ...state, selected };
    }
    case Action.FILTER: {
      let query = action.payload as string;
      let datalist = state.datalistCopy;
      if (query) {
        datalist = datalist.filter(
          (el) => el.search(new RegExp(query, "i")) > -1
        );
      }
      return { ...state, query, datalist };
    }
    default:
      return state;
  }
}

export function useTagsReducer(datalist?: TDatalist) {
  const [state, dispatch] = useReducer(
    reducer,
    datalist ? { ...initialArg, datalist, datalistCopy: datalist } : initialArg
  );
  //
  const setDatalist = (datalist: TDatalist) =>
    dispatch({ type: Action.CREATE, payload: datalist });

  const onAdd = (item: string) => dispatch({ type: Action.ADD, payload: item });

  const onRemove = (item: string) =>
    dispatch({ type: Action.REMOVE, payload: item });

  const onFilter = (query: string) =>
    dispatch({ type: Action.FILTER, payload: query });

  const onReset = () => dispatch({ type: Action.RESET });

  return {
    ...state,
    isDirty: state.selected.length > 0,
    setDatalist,
    onAdd,
    onRemove,
    onFilter,
    onReset,
  };
}
