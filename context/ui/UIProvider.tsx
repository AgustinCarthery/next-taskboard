import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  isAddingEntry: boolean;
  sidemenuOpen: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isAddingEntry: false,
  sidemenuOpen: false,
  isDragging: false,
};

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI = Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI = Close Sidebar' });
  };

  const setIsAddingEntry = (status: boolean) => {
    dispatch({ type: 'UI = Adding Entry', payload: status });
  };

  const startDragging = () => {
    dispatch({ type: 'UI = Start Dragging' });
  };
  const endDragging = () => {
    dispatch({ type: 'UI = End Dragging' });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
