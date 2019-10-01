import { DateTime } from 'luxon';

// TODO refactor to DRY
const getDateLabel = date => {
  const [day, month, year] = date.split('/');
  return `${DateTime.local(Number(year), Number(month), Number(day)).weekdayShort}, ${date}`;
}

const getDateFromKey = key =>
  key.replace('@day_entries_item:', '');

const formatData = (key, item) => {
  const date = getDateFromKey(key);
  return{
    key: key,
    date: date,
    dateLabel: getDateLabel(date),
    entries: item,
  }
}

const mapDbToUiItem = (key, dbItem) => {
  return formatData(key, dbItem);
}

export default mapDbToUiItem;