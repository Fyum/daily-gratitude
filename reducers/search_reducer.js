export
  const ACTIONS = {
    SEARCH_ENTRIES: 'SEARCH_ENTRIES',
    SORT_BY: 'SORT_BY',
  }

export
  const searchEntries = data => ({
    type: ACTIONS.SEARCH_ENTRIES,
    data,
  })

export
  const initialState = {
    result: [],
    sortBy: null,
    searchText: '',
  }

export
  const reducer = (state, action) => {
    switch(action.type){
      case ACTIONS.SEARCH_ENTRIES:
        return {...state, result: action.data }
    }
    return state
  }