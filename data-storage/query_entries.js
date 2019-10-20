import { DateTime } from 'luxon';
import getMultiItems from './utils/get_multi_items';
import mapItemsToUi from './mappers/map_db_to_ui_items';

// e.g: [$day_entries_item:01/09/2019, $day_entries_item:02/09/2019, ..., $entry_item:31/09/2019]
const makeKeys = (month, year) => {
  const numberOfDays = DateTime.local(parseInt(year), parseInt(month)).daysInMonth;
  return new Array(numberOfDays)
    .fill(null)
    .map((x, i) => `@day_entries_item:${(i + 1).toString().padStart(2, '0')}/${month.padStart(2, '0')}/${year}`);
}

const applyQuery = (items, query) =>
  items.map(item => ({
    ...item,
    value: 
      item.value.filter(
        ({comment, title}) => comment.includes(query) || title.includes(query))
  }))
  .filter(item => item.value.length) // Only keeps the ones that have entries

/**
 *  TODO should search everything
 * @param {*} month 
 * @param {*} year 
 * @returns {Array} e.g: [ { key, date, entries: [] }]
 */
const queryEntries = async (month, year, query) => {
  if (!month || !year) {
    // TODO make a better check
    return [];
  }
  const keys = makeKeys(month, year);

  const items = await getMultiItems(keys);
  if(!items.length){
    console.log('no item');
    return [];
  }
  console.log('items before map', items)
  const filteredResult = applyQuery(items, query)
  const res = mapItemsToUi(filteredResult);
  console.log('search result = ', query, res)
  return res;
}

export default queryEntries;