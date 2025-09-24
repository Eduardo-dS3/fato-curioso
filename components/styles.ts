import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    title: {
        marginTop: 40,
        fontSize: 28,
        marginBottom: 6,
        fontWeight: '800',
        letterSpacing: 0.2,
    },
    subTitle: {
        fontSize: 15,
        color: '#666',
        marginBottom: 14,
    },
    textInput: {
        height: 48,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 16,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonDisabled: {
        backgroundColor: '#D6D3F8',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    answerBox: {
        marginTop: 20,
        padding: 18,
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        borderLeftWidth: 6,
        backgroundColor: '#E7F3FF',
    },
    answerText: {
        fontSize: 16,
        color: '#111827',
        lineHeight: 22,
    }
});