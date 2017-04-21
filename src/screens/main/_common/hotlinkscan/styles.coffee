{StyleSheet} = require 'react-native'
{gray} = require 'src/colors'


module.exports = StyleSheet.create
  container:
    flex: 17
    alignItems: 'center'
    padding: 10

  icon:
    textAlign: 'center'
    color: gray
    backgroundColor: 'transparent'

  titleContainer:
    paddingTop: 4
    justifyContent: 'center'

  title:
    textAlign: 'center'
    color: gray
    backgroundColor: 'transparent'
