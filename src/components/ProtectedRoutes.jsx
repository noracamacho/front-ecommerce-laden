import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const navigate = useNavigate();
    
    if(localStorage.getItem("token")){
        return <Outlet />
    } else { 
        navigate('/login');
        // return <Navigate to='/login' />
    }
};

export default ProtectedRoutes;