import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, SafeAreaView, View} from 'react-native';
import { styles, colors } from '../../css';

export default class SearchSuggestions extends Component {
  state = {
    search: "",
  }

  handleDoneButton = () => {
    this.props.navigation.navigate('SearchMap');
  };

  render() {
    const { search } = this.state;
    
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
                       onChangeText={text => this.setState({search: text})}
              onFocus={this.showSearchResults} />
              <TouchableOpacity style={styles.buttonDoneSearch} onPress={this.handleDoneButton}>
                <Text style={styles.buttonDoneSearchText}>
                  Done
                </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.searchSuggestionsEmpty}>
            <Text style={styles.searchSuggestionsEmptyText}>
              Start typing to add a location.
            </Text>
          </View>            
        </View>
      </SafeAreaView>
    );
  }
}
