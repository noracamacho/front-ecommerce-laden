//! Bearer Token
// The API we are using is a Bearer type , so we need to add the word while getting the token from the localStorage

const loadConfiguration = () => (
    {
        // AUTHORIZATION TIPO BEARER TOKEN
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
)

export default loadConfiguration;