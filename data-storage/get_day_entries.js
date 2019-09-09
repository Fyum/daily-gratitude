import getItem from './utils/get_item';

// e.g: $day_entries_item:01/09/2019
const makeKey = (date) =>
  `$day_entries_item:${date}`;

/**
 * 
 * @param {*} date
 * @param {string} id 
 * @returns {Object} e.g: { date, title, comment }
 */
const getEntry = async (date, id) => {
  const key = makeKey(date);
  const item = await getItem(key);
  if(!item){
    console.log('No day entry with key', key);
    return;
  }
  const dayEntry = item.entries.find(x => x.id === id);;
  if(!dayEntry){
    console.log('Could not fetch day entry with id', id);
  }
  return dayEntry;
}

export default getEntry;