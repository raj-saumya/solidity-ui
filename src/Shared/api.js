import axios from 'axios';
import {
    CTX
} from '../utils/Store';

// axios.interceptors.request.use(
//     config => {
//         console.log('intercertp', CTX)
//         return config;
//     },
//     error => {
//         Promise.reject(error)
//     });

export default {
    accountService() {
        return {
            signIn: ({
                username,
                password
            }) => {
                return axios.post('http://localhost:8000/auth/token/login', {
                    username,
                    password
                })
            },
            signUp: ({
                username,
                password
            }) => {
                return axios.post('http://localhost:8000/auth/users/', {
                    username,
                    password
                })
            },
            submitQuiz: (
                quizQuestions, header = null) => {
                return axios.post('http://localhost:8000/qa/quiz',
                    quizQuestions, header)
            },
        }
    }
}