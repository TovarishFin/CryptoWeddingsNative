import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Form, Item, Input } from 'native-base'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
