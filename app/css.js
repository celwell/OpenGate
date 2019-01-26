import { StyleSheet } from 'react-native';

export const colors = {
  opendoorBlue: '#2E89E2',
  steelBlue: '#4A4F6D',
};

export const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  page: {
    padding: 25,
  },
  content: {
    flex: 1,
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
  search: {
    fontSize: 16,
    padding: 10,
    margin: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 4,
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
    color: '#ffffff',
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
  }
});
