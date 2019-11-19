import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Section, Input, IconButton} from './style';

const SearchInput = props => {
  return (
    <Section>
      <Icon name="search" size={24} color={'#ccc'} />
      <Input
        autoCorrect={false}
        autoCompleteType="off"
        autoCapitalize="none"
        {...props}
      />
      <IconButton onPress={() => props.onChange('')}>
        <Icon name="close" size={24} color={'#ccc'} />
      </IconButton>
    </Section>
  );
};
export default SearchInput;
