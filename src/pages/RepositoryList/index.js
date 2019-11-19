import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StatusBar, Keyboard, Animated} from 'react-native';
import {connect} from 'react-redux';

import {configureLayoutAnimation} from '~/utils/layoutAnimation';
import {filterByKeyword} from '~/utils/repoFilter';
import {getRepos} from '~/store/ducks/repository';

import RepoListScrollView from './components/ListItemScroll';
import SearchInput from '~/components/SearchInput';
import {Wrapper, Logo} from './style';

export class RepositoryList extends PureComponent {
  static propTypes = {
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    ),
    getRepos: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
    repos: [],
    getRepos: () => {},
  };

  state = {
    keyword: '',
  };

  scrollYValue = new Animated.Value(0);

  componentDidMount() {
    this.props.getRepos();
  }

  onSearch(keyword) {
    clearTimeout(this.typeKeywordDebounce);

    this.typeKeywordDebounce = setTimeout(() => {
      configureLayoutAnimation();
      this.setState({keyword});
    }, 300);
  }

  onChange(value) {
    if (!value) {
      Keyboard.dismiss();
    }
    this.onSearch(value.nativeEvent ? value.nativeEvent.text : value);
  }

  render() {
    const {repos, isLoading} = this.props;
    const {keyword} = this.state;

    return (
      <Wrapper>
        <StatusBar barStyle="default" />
        <Animated.View>
          <Logo source={require('~/assets/images/logo-full.png')} />
          <SearchInput
            defaultValue={keyword}
            onChange={value => this.onChange(value)}
            placeholder="search"
          />
        </Animated.View>

        <RepoListScrollView
          isLoading={isLoading}
          getRepos={this.props.getRepos}
          repos={filterByKeyword(repos, keyword)}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.scrollYValue}}},
          ])}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repository.repos || [],
  isLoading: state.repository.loading,
});

const mapDispatchToProps = {
  getRepos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepositoryList);
