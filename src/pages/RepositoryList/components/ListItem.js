import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, ItemDescription, ItemWrapper, ItemText, Text} from './style';

const ListItem = ({index, repo: {name, description}, onPress}) => (
  <Wrapper onPress={onPress} testID={`RepoItem-${index}`}>
    <ItemWrapper>
      <ItemText>{name}</ItemText>
      <ItemDescription>
        <Text>{description}</Text>
      </ItemDescription>
    </ItemWrapper>
  </Wrapper>
);

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  repo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ListItem;
