export
  const ACTIONS = {
    LIST_DAY_ENTRIES_MONTH: 'LIST_DAY_ENTRIES_MONTH',
    ADD_DAY_ENTRY: 'ADD_DAY_ENTRY',
    DELETE_DAY_ENTRY: 'DELETE_DAY_ENTRY',
    NEXT_CURRENT_LIST: 'NEXT_CURRENT_LIST',
    PREVIOUS_CURRENT_LIST: 'PREVIOUS_CURRENT_LIST',
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
  })

export
  const initialState = {
    data: [],
    isLoading: false,
    isModalOpen: false,
    selectedEntries: [],
    currentList: {
      month: 10,
      year: 2019,
    }
  };


const updateSingleDay = (state, data) => {
  console.log({ state, data });
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

const setFormattedPreviousCurrentList = (state) => {
  const newMonth = state.currentList.month - 1;
  if (newMonth === 0) {
    return {
      ...state,
      currentList: {
        month: 12,
        year: state.currentList.year - 1,
      }
    }
  } else {
    return {
      ...state,
      currentList: {
        month: newMonth,
        year: state.currentList.year,
      }
    }
  }
}

const setFormattedNextCurrentList = (state) => {
  const newMonth = state.currentList.month + 1;
  if (newMonth === 13) {
    return {
      ...state,
      currentList: {
        month: 1,
        year: state.currentList.year + 1,
      }
    }
  } else {
    return {
      ...state,
      currentList: {
        month: newMonth,
        year: state.currentList.year,
      }
    }
  }
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
    }
  }