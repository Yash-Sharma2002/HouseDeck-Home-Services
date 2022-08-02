import React from 'react';
import CryptoJS from 'crypto-js'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LoginContext = React.createContext(null);

const ContextProvider = ({ children }) => {

    const [message, setMessage] = React.useState('')
    const [messageType, setMessageType] = React.useState('')
    const [city, setCity] = React.useState("Bangalore")
    const [show, setShow] = React.useState(false)
    const isLogin = forCheckingLogin()
    const userData = loadUserData()

    React.useEffect(() => {
        fetchandCheck()
        setCity(loadCity())
    }, [])

    const handleAlertClose = () => {
        setShow(false)
        setMessage('')
        setMessageType('')
    }


    function encrypt(text) {
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), 'housedeck-is in-bangalore').toString();
        return ciphertext
    }
    function decrypt(ciphertext) {
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'housedeck-is in-bangalore');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData
    }


    function loadUserData() {
        try {
            const serializedState = localStorage.getItem('START_DATA');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        } catch (err) {
            localStorage.setItem('START_DATA', JSON.stringify({
                USERDATA_AS_NUMBER: '',
                USERDATA_AS_USERNAME: '',
                USERDATA_AS_EMAIL: '',
            }));
            const serializedState = localStorage.getItem('START_DATA');
            if (serializedState === null) {
                return '';
            }
            return serializedState
        }

    }

    function forCheckingLogin() {
        try {
            const boolReturner = localStorage.getItem('INIT_DATA')
            if (boolReturner === 'true') return true
            if (boolReturner === 'false') return false
        }
        catch (err) {
            localStorage.setItem('INIT_DATA', JSON.stringify(false));
            return false;
        }
    }

    function fetchandCheck() {
        try {
            localStorage.getItem('INIT_DATA')
            localStorage.getItem('START_DATA')
            localStorage.getItem('CENTER_DATA')
            localStorage.getItem('EMAIL_VERIFIED')
        }
        catch (err) {
            localStorage.setItem('INIT_DATA', JSON.stringify(false));
            localStorage.setItem('START_DATA', JSON.stringify({
                USERDATA_AS_NUMBER: '',
                USERDATA_AS_USERNAME: '',
                USERDATA_AS_EMAIL: '',
            }))
            localStorage.setItem('EMAIL_VERIFIED', true)
            localStorage.setItem('CENTER_DATA', JSON.stringify(encrypt('Bangalore')));
        }
    }

    const handleData = (data) => {
        setCity(data)
        try {
            localStorage.setItem('CENTER_DATA', JSON.stringify(encrypt(data)));
        } catch (err) {
            return '';
        }
    }

    function loadCity() {
        try {
            const serializedState = localStorage.getItem('CENTER_DATA')
            return decrypt(JSON.parse(serializedState))
        } catch (err) {
            localStorage.setItem('CENTER_DATA', JSON.stringify(encrypt('Bangalore')));
            const serializedState = localStorage.getItem('CENTER_DATA')
            if (serializedState === null) {
                return '';
            }
            return decrypt(JSON.parse(serializedState))
        }
    }


    return (
        <LoginContext.Provider value={{
            message, setMessage, messageType,
            setMessageType, show, setShow, handleAlertClose, userData, isLogin, city, handleData, encrypt, decrypt
        }}>
            {children}
            < Snackbar open={show} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </LoginContext.Provider >
    )
}

export default ContextProvider;