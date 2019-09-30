import { DateTime } from 'luxon';

// TODO refactor to DRY
const getDateLabel = date => {
  const [day, month, year] = date.split('/');
  return `${DateTime.local(Number(year), Number(month), Number(day)).weekdayShort}, ${date}`;
}

const formatData = item => ({
  key: item.key,
  date: item.value[0].date,
  dateLabel: getDateLabel(item.value[0].date),
  entries: item.value,
});

const mapDbToUiItem = dbItem => {
  return formatData(dbItem);
}

export default mapDbToUiItem;