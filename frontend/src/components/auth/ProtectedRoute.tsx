import { useAuthStore } from '@/stores/useAuthStore';
import { Navigate, Outlet } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';


const ProtectedRoute = () => {
    const { accessToken, refresh, fetchMe, user, loading } = useAuthStore();
    const [starting, setStarting] = useState(true);
    const init = async () => {

        if (!accessToken) {
            await refresh();
        }
        if (accessToken && !user) {
            await fetchMe();
        }
    }
    useEffect(() => {
        const initPage = async () => {
            await init();
            setStarting(false);
        }
        initPage();
    }, [])
    if (loading || starting) {
        return <div className='flex h-screen items-center'>Loading...</div>
    }
    if (!accessToken) {
        return (
            <Navigate
                to="/signin"
            />
        )
    }
    return (
        <Outlet />
    )
}

export default ProtectedRoute