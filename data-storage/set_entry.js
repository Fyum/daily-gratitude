import setItem from './utils/set_item';
import getItem from './utils/get_item';

const makeKey = date =>
  `@day_entries_item:${date}`;

const createDayEntry = entry => [{
  ...entry,
  id: 0,
}];

const addEntry = (entries, entry) => 
[
  ...entries,
  {
    ...entry,
    id: entries.length + 1,
  }
]

/**
 * 
 * @param {*} date 
 * @param {Object} entry e.g: { date, title, comment }
 */
const setEntry = async (entry) => {
  const key = makeKey(entry.date);
  const entries = await getItem(key);
  if(!entries){
    const newDayEntry = createDayEntry(entry);
    return setItem(key, newDayEntry);
  }

  const updatedDayEntry = addEntry(entries, entry);
  await setItem(key, updatedDayEntry);
};

export default setEntry;