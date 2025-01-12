import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({title, placeholder, keyboard, is_password}) => {
  return (
    <View style={{marginVertical: 2}}>
          <Text style={{fontSize: 16, color: '#6C6C6C'}}>{title}</Text>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="gray"
            style={{
              borderBottomColor: '#081122',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
            secureTextEntry={is_password}
            keyboardType={keyboard}
          />
        </View>
  )
}

export default Input