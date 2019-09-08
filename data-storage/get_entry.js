import getItem from './utils/get_item';

// e.g: $entry_item:01/09/2019
const makeKey = (date) =>
  `$entry_item:${date}`;

/**
 * 
 * @param {*} date 
 * @returns {Object} e.g: { date, title, comment }
 */
const getEntry = async (date) => {
  const key = makeKey(date);
  return getItem(key);
}

export default getEntry;