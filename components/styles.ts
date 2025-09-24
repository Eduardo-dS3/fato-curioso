import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    subTitle: {
      fontSize: 18,
      color: '#666',
      marginBottom: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonDisabled: {
        backgroundColor: '#A0A0A0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    answerBox: {
        marginTop: 20,
        padding: 15,
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        backgroundColor: '#E7F3FF',
    },
    answerText: {
        fontSize: 16,
        color: '#333',
    }
});