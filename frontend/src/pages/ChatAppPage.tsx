import Logout from '@/components/auth/logout'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/useAuthStore'
import { useNavigate } from 'react-router'
import Loggout from '../components/auth/logout'


const ChatAppPage = () => {
    return (
        <div>
            <Loggout />
        </div>
    )
}

export default ChatAppPage