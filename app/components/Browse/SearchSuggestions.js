import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { searchRegions } from '../../services/api';
import { styles, colors } from '../../css';

export default class SearchSuggestions extends Component {
  state = {
    searchValue: "",
    loading: false,
    regions: [],
  }

  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }

  updateSearchSuggestions() {
    this.showLoading();
    const thatSearchValue = this.state.searchValue;
    searchRegions(this.state.searchValue).then(
      (regions) => {
        if (this.state.searchValue === thatSearchValue) {
          if (regions !== false) {
            this.setState({ regions }, this.hideLoading);
          } else {
            this.setState({
              error: "API rate limit exceeded.",
            }, this.hideLoading);
          }
        }
      }
    );
  }

  onSearchChange = (value) => {
    this.setState({
      searchValue: value,
    }, () => {
      if (this.state.searchValue.length > 0) {
        this.updateSearchSuggestions();
      }
    });
  }

  handleDoneButton = () => {
    this.props.navigation.navigate('SearchMap');
  };
  
  renderSuggestions() {
    const { loading, regions } = this.state;

    const suggestions = (
      <View style={styles.searchSuggestions}>
        {regions.map(
          region => (
            <TouchableOpacity key={region.id}
                              style={styles.searchSuggestion}
                              onPress={() => alert(`Add location: ${region.name}`)}>
              <Text style={styles.searchSuggestionText}>
                {region.name}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    );
    
    return (loading ?
            this.renderStatus() :
            (regions.length ?
             suggestions :
             this.renderStatus('No results.')));
  }
  
  renderStatus(status) {
    const { loading } = this.state;
    
    return (
      <View style={styles.searchSuggestionsEmpty}>
        <Text style={styles.searchSuggestionsEmptyText}>
          {loading ? 'Searching...' : status}
        </Text>
      </View>
    );
  }

  render() {
    const { searchValue, loading } = this.state;
    
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>
          <View style={styles.searchSuggestionsInputRow}>
            <TextInput style={{...styles.searchInput, ...styles.searchSuggestionsInput}}
                       placeholder="City, neighborhood, zip"
                       autoComplete="off"
                       autoCorrect={false}
                       autoFocus={true}
                       clearButtonMode="while-editing"
                       onChangeText={this.onSearchChange}
                       onFocus={this.showSearchResults} />
            <TouchableOpacity style={styles.buttonDoneSearch} onPress={this.handleDoneButton}>
              <Text style={styles.buttonDoneSearchText}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
          {searchValue.length ? this.renderSuggestions() : this.renderStatus('Start typing to add a location.')}
        </View>
      </SafeAreaView>
    );
  }
}
