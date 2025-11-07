
import { useAuthStore } from '@/stores/useAuthStore'
import Loggout from '../components/auth/Logout.tsx'



const ChatAppPage = () => {
    const user = useAuthStore(s => s.user);
    return (
        <div>
            {user?.username}
            <Loggout />
        </div>
    )
}

export default ChatAppPage