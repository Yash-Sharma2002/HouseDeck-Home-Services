import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LoginContext = React.createContext(null);

const ContextProvider = ({ children }) => {

    const [message, setMessage] = React.useState('')
    const [messageType, setMessageType] = React.useState('')
    const [city, setCity] = React.useState("")
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
        var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
        var key = 'password';
        var cipher = crypto.createCipher(algorithm, key);
        var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    }
    
    

    function loadUserData() {
    //    const data = encrypt()
        try {
            const serializedState = localStorage.getItem('userdata');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        } catch (err) {
            localStorage.setItem("userdata", JSON.stringify({
                Number: '',
                Username: '',
                Email: '',
            }))
            const serializedState = localStorage.getItem('userdata');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        }

    }

    function forCheckingLogin() {
        try {
            const boolReturner = localStorage.getItem('isLogin')
            if (boolReturner === 'true') return true
            if (boolReturner === 'false') return false
        }
        catch (err) {
            localStorage.setItem('isLogin', JSON.stringify(false));
            return false;
        }
    }

    function fetchandCheck() {
        try {
            localStorage.getItem('isLogin')
            localStorage.getItem('userData')
            localStorage.getItem('city');

        }
        catch (err) {
            localStorage.setItem('isLogin', JSON.stringify(false));
            localStorage.setItem('userData', JSON.stringify({
                Number: '',
                Username: ''
            }))
            localStorage.setItem('city', JSON.stringify(''));
        }
    }

    const handleData = (data) => {
        setCity(data)
        try {
            localStorage.setItem('city', JSON.stringify(data));
        } catch (err) {
            return '';
        }
    }

    function loadCity() {
        try {
            const serializedState = localStorage.getItem('city');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        } catch (err) {
            localStorage.setItem('city', JSON.stringify(''));
            const serializedState = localStorage.getItem('city');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        }
    }


    return (
        <LoginContext.Provider value={{
            message, setMessage, messageType,
            setMessageType, show, setShow, handleAlertClose, userData, isLogin, city, handleData
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