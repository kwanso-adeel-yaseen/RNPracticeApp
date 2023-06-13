import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#5e0acc',
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '100%',
    padding: 8,
    borderRadius: 6,
    color: '#ffff',
  },
  goals: {
    flex: 5,
    marginTop: 24,
  },
  goalListItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#ffff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '50%',
    paddingHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
