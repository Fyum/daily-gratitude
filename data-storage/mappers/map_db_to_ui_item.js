import { DateTime } from 'luxon';

// TODO refactor to DRY
const getDateLabel = date => {
  const [day, month, year] = date.split('/');
  return `${DateTime.local(Number(year), Number(month), Number(day)).weekdayShort}, ${date}`;
}

const formatData = (key, item) => ({
  key: key,
  date: item[0].date,
  dateLabel: getDateLabel(item[0].date),
  entries: item,
});

const mapDbToUiItem = (key, dbItem) => {
  console.log('db item', dbItem);
  return formatData(key, dbItem);
}

export default mapDbToUiItem;