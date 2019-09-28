import setItem from './utils/set_item';
import getItem from './utils/get_item';


const removeFromDay = (dayEntries, entryId) => {
  return dayEntries.filter(({ id }) => id !== entryId);
};

const deleteEntry = async (dayKey, entryId) => {
  console.log('Attempting to delete', dayKey, dayKey);
  const dayEntries = await getItem(dayKey);
  console.log(dayEntries);
  const updatedDayEntries = removeFromDay(dayEntries, entryId);
  await setItem(dayKey, updatedDayEntries);
  console.log('Delete successful');
}

export default deleteEntry;