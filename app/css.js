import { StyleSheet } from 'react-native';

export const colors = {
  opendoorBlue: '#2E89E2',
  steelBlue: '#4A4F6D',
  bordering: '#DFDFDF',
};

export const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  page: {
    padding: 25,
  },
  content: {
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: colors.steelBlue,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.steelBlue,
  },
  searchInput: {
    fontSize: 16,
    padding: 10,
    margin: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 4,
  },
  searchSuggestionsInput: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: -1,
  },
  buttonPrimary: {
    marginBottom: 8,
    padding: 14,
    alignItems: 'center',
    backgroundColor: colors.opendoorBlue,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.35, 
    shadowRadius: 15,
  },
  buttonPrimaryText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  buttonSecondary: {
    marginBottom: 8,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  buttonSecondaryText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.steelBlue,
  },
  buttonDoneSearch: {
    padding: 10,
    paddingLeft: 5,
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  buttonDoneSearchText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.steelBlue,
  },
  buttonSegmented: {
    padding: 5,
    backgroundColor: 'transparent',
    flex: 1,
    borderLeftWidth: 1,
    borderColor: colors.bordering,
  },
  buttonSegmentedLeft: {
    borderLeftWidth: 0,
  },
  buttonSegmentedText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.opendoorBlue,
  },
  searchSuggestionsInputRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchSuggestions: {
    flex: 1,
  },
  searchSuggestion: {
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  searchSuggestionText: {
    fontSize: 17,
    fontWeight: '600',
  },
  searchSuggestionsEmpty: {
    flex: 1,
    paddingTop: 40,
  },
  searchSuggestionsEmptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  mapCluster: {
    width: 30,
    height: 30,
    backgroundColor: colors.opendoorBlue,
    borderColor: '#1969b8',
    borderWidth: 1,
    borderRadius: 15,
    opacity: 0.91,
  },
  mapClusterText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    lineHeight: 27,
  },
  mapPin: {
    width: 33,
    height: 33,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  featureRowImageContainer: {
    width: 60,
    paddingTop: 7,
  },
  featureRowImage: {
    width: 45,
    resizeMode: 'contain',
  },
  featureRowDescription: {
    flex: 1,
  },
  featureRowDescriptionText: {
    fontWeight: '400',
    color: colors.steelBlue,
  },
  featureRowHeading: {
    paddingBottom: 5,
  },
  featureRowHeadingText: {
    fontWeight: '600',
    color: colors.steelBlue,
  },
  horizontalRule: {
    height: 3,
    backgroundColor: colors.bordering,
  },
});
