import { DateTime } from 'luxon';

// TODO refactor to DRY
const getDateLabel = date => {
  const [day, month, year] = date.split('/');
  return `${DateTime.local(Number(year), Number(month), Number(day)).weekdayShort}, ${date}`;
}

const formatData = (items) => {
  return items.map(item => {
    return {
      key: item.key,
      date: item.value[0].date,
      dateLabel: getDateLabel(item.value[0].date), // TODO maybe set this data on put
      entries: item.value,
    }
  });
}

const mapDbToUiItems = (dbItems) => {
  return formatData(dbItems);
}

export default mapDbToUiItems;