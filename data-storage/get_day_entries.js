import getItem from './utils/get_item';
import mapDbToUiItem from './mappers/map_db_to_ui_item';

// e.g: $day_entries_item:01/09/2019
const makeKey = (date) =>
  `@day_entries_item:${date}`;

/**
 * Retrieve a single formatted day entries object
 * @param {*} date
 */
const getDayEntries = async (date) => {
  const key = makeKey(date);
  const item = await getItem(key);
  if(!item){
    console.log('No day entry with key', key);
    return;
  }
  const singleItem = mapDbToUiItem(key, item);
  return singleItem;
}

export default getDayEntries;