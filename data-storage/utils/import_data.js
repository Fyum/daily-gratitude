import { AsyncStorage } from 'react-native'

const importData = async () => {
  const keyValues = [
    [
      "@day_entries_item:21/10/2019",
      "[{\"date\":\"21/10/2019\",\"title\":\"TEST3\",\"comment\":\"\",\"color\":\"#5345C7\",\"id\":\"b6817f42-849e-411c-b921-d52dd49dcb14\"}]"
    ]
  ]
  await AsyncStorage.multiSet(keyValues)
}

export default importData