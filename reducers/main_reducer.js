export
  const ACTIONS = {
    LIST_DAY_ENTRIES_MONTH: 'LIST_DAY_ENTRIES_MONTH',
    ADD_DAY_ENTRY: 'ADD_DAY_ENTRY',
    DELETE_DAY_ENTRY: 'DELETE_DAY_ENTRY',
    NEXT_CURRENT_LIST: 'NEXT_CURRENT_LIST',
    PREVIOUS_CURRENT_LIST: 'PREVIOUS_CURRENT_LIST',
    SET_DISPLAYED_OVERLAY: 'SET_DISPLAYED_OVERLAY',
    SET_ENTRY_TO_DELETE: 'SET_ENTRY_TO_DELETE',
  }

export
  const listDayEntriesMonth = data => ({
    type: ACTIONS.LIST_DAY_ENTRIES_MONTH,
    data,
  })

export
  const addDayEntry = data => ({
    type: ACTIONS.ADD_DAY_ENTRY,
    data,
  });

export
  const deleteDayEntry = data => ({
    type: ACTIONS.DELETE_DAY_ENTRY,
    data,
  });

export
  const nextCurrentList = data => ({
    type: ACTIONS.NEXT_CURRENT_LIST,
    data,
  });

export
  const previousCurrentList = data => ({
    type: ACTIONS.PREVIOUS_CURRENT_LIST,
    data,
  });

export
  const setDisplayedOverlay = data => ({
    type: ACTIONS.SET_DISPLAYED_OVERLAY,
    data,
  });

export
  const setEntryToDelete = data => ({
    type: ACTIONS.SET_ENTRY_TO_DELETE,
    data,
  })

export
  const initialState = {
    data: [],
    isLoading: false,
    isDisplayedOverlay: {
      createEntry: false,
      deleteEntry: false,
    },
    selectedEntries: [],
    currentList: {
      month: 10,
      year: 2019,
    },
    entryToDelete: {},
  };


const updateSingleDay = (state, data) => {
  if (!state.data.find(x => x.key === data.key)) {
    return {
      ...state,
      data: [
        ...state.data,
        data,
      ].sort((a, b) => a.key < b.key ? -1 : 1)
    }
  };
  return {
    ...state,
    data: state.data.map(x =>
      data.key === x.key
        ? data
        : x
    )
  };
};


const setFormattedAddDayEntry = (state, data) => {
  return updateSingleDay(state, data);
};

const setFormattedDeleteDayEntry = (state, data) => {
  return updateSingleDay(state, data)
};

const formatCurrentList = (state, m, y) => {
  return {
    ...state,
    currentList: {
      id: `${m.toString().padStart(2, 0)}/${y}`,
      month: m,
      year: y,
    }
  }
}

const setFormattedPreviousCurrentList = (state) => {
  const newMonth = state.currentList.month - 1;
  return newMonth === 0
    ? formatCurrentList(state, 12, state.currentList.year - 1)
    : formatCurrentList(state, newMonth, state.currentList.year);
}

const setFormattedNextCurrentList = (state) => {
  const newMonth = state.currentList.month + 1;
  return newMonth === 13
    ? formatCurrentList(state, 1, state.currentList.year + 1)
    : formatCurrentList(state, newMonth, state.currentList.year);
}

export
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.LIST_DAY_ENTRIES_MONTH:
        return { ...state, data: action.data };
      case ACTIONS.ADD_DAY_ENTRY:
        return setFormattedAddDayEntry(state, action.data);
      case ACTIONS.DELETE_DAY_ENTRY:
        return setFormattedDeleteDayEntry(state, action.data);
      case ACTIONS.NEXT_CURRENT_LIST:
        return setFormattedNextCurrentList(state);
      case ACTIONS.PREVIOUS_CURRENT_LIST:
        return setFormattedPreviousCurrentList(state);
      case ACTIONS.SET_DISPLAYED_OVERLAY:
        return { ...state, isDisplayedOverlay: { ...state.isDisplayedOverlay, ...action.data } } // TODO maybe set all overlay flag to false?
      case ACTIONS.SET_ENTRY_TO_DELETE:
        return { ...state, entryToDelete: action.data }
    }
  }