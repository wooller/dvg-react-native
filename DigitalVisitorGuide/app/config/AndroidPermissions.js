import { PermissionsAndroid } from 'react-native';
import Reactotron from 'reactotron-react-native'

export function requestStoragePermission() {
  try {
    PermissionsAndroid.requestMultiple([ PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]).then((result) => {
      Reactotron.log(result);
    })
  } catch (err) {
    Reactotron.warn(err)
  }
}
