import setItem from './utils/set_item';
import getItem from './utils/get_item';

const COLORS = [
  '#BE5555',
  '#BE9355',
  '#C7BF45',
  '#A2BE55',
  '#78BE55',
  '#45C782',
  '#55A6BE',
  '#557CBE',
  '#5345C7',
  '#6255BE',
  '#8655BE',
  '#C74581'
]

const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];

const makeKey = date =>
  `@day_entries_item:${date}`;

const createDayEntry = entry => [{
  ...entry,
  color: getRandomColor(),
  id: 1,
}];

const addEntry = (entries, entry) =>
  [
    ...entries,
    {
      ...entry,
      color: entries[0].color
        ? entries[0].color
        : getRandomColor(),
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
  if (!entries) {
    const newDayEntry = createDayEntry(entry);
    return setItem(key, newDayEntry);
  }

  const updatedDayEntry = addEntry(entries, entry);
  await setItem(key, updatedDayEntry);
};

export default setEntry;