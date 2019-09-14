import { DateTime } from 'luxon';
import getMultiItems from './utils/get_multi_items';

// e.g: [$day_entries_item:01/09/2019, $day_entries_item:02/09/2019, ..., $entry_item:31/09/2019]
const makeKeys = (month, year) => {
  const numberOfDays = DateTime.local(parseInt(year), parseInt(month)).daysInMonth;
  return new Array(numberOfDays)
    .fill(null)
    .map((x, i) => `@day_entries_item:${(i + 1).toString().padStart(2, '0')}/${month.padStart(2, '0')}/${year}`);
}

const getDateLabel = date => {
  const [day, month, year] = date.split('/');
  return `${DateTime.local(Number(year), Number(month), Number(day)).weekdayShort}, ${date}`;
}

const formatData = (items) => {
  return items.map(item => {
    return {
      key: item.key,
      date: item.value[0].date,
      dateLabel: getDateLabel(item.value[0].date),
      entries: item.value,
    }
  });
}

/**
 * 
 * @param {*} month 
 * @param {*} year 
 * @returns {Array} e.g: [ { key, date, entries: [] }]
 */
const getMonthEntries = async (month, year) => {
  if (!month || !year) {
    // TODO make a better check
    return dummyData;
  }
  const keys = makeKeys(month, year);

  console.log('KEYS', keys);
  const items = await getMultiItems(keys);
  if(!items.length){
    console.log('no item');
    return [];
  }
  console.log('ITEMS', items);
  return formatData(items);
}

export default getMonthEntries;