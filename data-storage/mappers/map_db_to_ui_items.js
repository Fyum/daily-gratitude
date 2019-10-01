import { DateTime } from 'luxon';

// TODO refactor to DRY
const getDateLabel = date => {
  const [day, month, year] = date.split('/');
  return `${DateTime.local(Number(year), Number(month), Number(day)).weekdayShort}, ${date}`;
}

const getDateFromKey = key =>
  key.replace('@day_entries_item:', '');

const formatData = (items) => {
  return items.map(item => {
    const date = getDateFromKey(item.key);
    return {
      key: item.key,
      date: date,
      dateLabel: getDateLabel(date), // TODO maybe set this data on put
      entries: item.value,
    }
  });
}

const mapDbToUiItems = (dbItems) => {
  return formatData(dbItems);
}

export default mapDbToUiItems;