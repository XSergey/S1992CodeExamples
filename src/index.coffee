crashlytics = require 'react-native-fabric-crashlytics'
crashlytics.init()

{Component} = React = require 'react'
{AppRegistry} = require 'react-native'
{Provider: ReduxProvider} = require 'react-redux'
configureStore = require './redux/store'
rootSaga = require './api/redux/sagas'
Api = require './api/index'
{apiInitialized} = require './redux/actions'
GUI = require './gui'


Server = 'http://bawadi-server.eu-central-1.elasticbeanstalk.com'

api = new Api(Server)
store = configureStore()
store.runSaga(rootSaga)
store.dispatch(apiInitialized(api))


class App extends Component
  render: ->
    `<ReduxProvider store={store}>
      <GUI />
    </ReduxProvider>`


AppRegistry.registerComponent('BawadiApp', -> App)
