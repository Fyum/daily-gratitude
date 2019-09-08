import setItem from './utils/set_item';

const makeKey = date =>
  `@entry_item:${date}`;

const setEntry = async (date, entry) => {
  const key = makeKey(date);
  await setItem(key, entry);
};

export default setEntry;