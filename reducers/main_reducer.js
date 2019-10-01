export
  const ACTIONS = {
    LIST_DAY_ENTRIES_MONTH: 'LIST_DAY_ENTRIES_MONTH',
    ADD_DAY_ENTRY: 'ADD_DAY_ENTRY',
    DELETE_DAY_ENTRY: 'DELETE_DAY_ENTRY',
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
  })

export
  const initialState = {
    data: [],
    isLoading: false,
    isModalOpen: false,
    selectedEntries: [],
    currentMonthList: {
      month: '',
      year: '',
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
}

const setFormattedDeleteDayEntry = (state, data) => {
  return updateSingleDay(state, data)
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
    }
  }