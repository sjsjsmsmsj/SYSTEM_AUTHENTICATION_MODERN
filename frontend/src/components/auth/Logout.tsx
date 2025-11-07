import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/useAuthStore'
import { useNavigate } from 'react-router'


const Logout = () => {
    const { signOut } = useAuthStore();
    const navigate = useNavigate();
    const handleLoggout = async () => {
        try {
            await signOut();
            navigate("/signin")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Button onClick={handleLoggout}> Logout</Button >
    )
}

export default Logout;