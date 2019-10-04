import setItem from './utils/set_item';
import getItem from './utils/get_item';


const removeFromDay = (dayEntries, entryId) => {
  return dayEntries.filter(({ id }) => id !== entryId);
};

const deleteEntry = async (dayKey, entryId) => {
  const dayEntries = await getItem(dayKey);
  const updatedDayEntries = removeFromDay(dayEntries, entryId);
  await setItem(dayKey, updatedDayEntries);
}

export default deleteEntry;