/**
 * Created by Andy Wooller on 04/10/2017.
 * Config file for reactotron debugger
 */

import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect() // let's connect!
