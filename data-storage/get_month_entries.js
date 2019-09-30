import { DateTime } from 'luxon';
import getMultiItems from './utils/get_multi_items';
import mapItemsToUi from './mappers/map_db_to_ui_items';

// e.g: [$day_entries_item:01/09/2019, $day_entries_item:02/09/2019, ..., $entry_item:31/09/2019]
const makeKeys = (month, year) => {
  const numberOfDays = DateTime.local(parseInt(year), parseInt(month)).daysInMonth;
  return new Array(numberOfDays)
    .fill(null)
    .map((x, i) => `@day_entries_item:${(i + 1).toString().padStart(2, '0')}/${month.padStart(2, '0')}/${year}`);
}

/**
 * 
 * @param {*} month 
 * @param {*} year 
 * @returns {Array} e.g: [ { key, date, entries: [] }]
 */
const getMonthEntries = async (month, year) => {
  if (!month || !year) {
    // TODO make a better check
    return dummyData;
  }
  const keys = makeKeys(month, year);

  const items = await getMultiItems(keys);
  if(!items.length){
    console.log('no item');
    return [];
  }
  const res = mapItemsToUi(items);
  // console.log('Result formatted', res);
  return res;
}

/*
Full example of formatted result: 
[
  {
    "key": "@day_entries_item:29/09/2019",
    "date": "29/09/2019",
    "dateLabel": "Sun, 29/09/2019",
    "entries": [
      {
        "date": "29/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#557CBE",
        "id": 1
      },
      {
        "date": "29/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#557CBE",
        "id": 2
      },
      {
        "date": "29/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#557CBE",
        "id": 3
      }
    ]
  },
  {
    "key": "@day_entries_item:30/09/2019",
    "date": "30/09/2019",
    "dateLabel": "Mon, 30/09/2019",
    "entries": [
      {
        "date": "30/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#55A6BE",
        "id": 1
      },
      {
        "date": "30/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#55A6BE",
        "id": 2
      },
      {
        "date": "30/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#55A6BE",
        "id": 3
      },
      {
        "date": "30/09/2019",
        "title": "test",
        "comment": "test",
        "color": "#55A6BE",
        "id": 4
      }
    ]
  }
]

*/

export default getMonthEntries;