import { DateTime } from 'luxon';
import getMultiItems from './utils/get_multi_items';

// e.g: [$entry_item:01/09/2019, $entry_item:02/09/2019, ..., $entry_item:31/09/2019]
const makeKeys = (month, year) => {
  const numberOfDays = DateTime.local(year, months);
  return new Array(numberOfDays).fill(null).map((x, i) => `@entry_item:${i + 1}/${month}/${year}`);
}

const dummyData = [
  {
    title: 'Entry 1',
    comments: 'Comments for entry 1',
    date: 'Mon, 01/09/2019',
  },
  {
    title: 'Entry 3',
    comments: 'Comments for entry 3',
    date: 'Mon, 01/09/2019',
  }
];

const getMonthEntries = async (month, year) => {
  if (!month || !year) {
    // TODO make a better check
    return dummyData;
  }
  const keys = makeKeys(month, year);
  return getMultiItems(keys);
}

export default getMonthEntries;