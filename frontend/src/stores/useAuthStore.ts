import { create } from 'zustand';
import { toast } from 'sonner';
import { authService } from '../services/authService.ts';
import type { AuthState } from '@/types/store';

export const useAuthStore = create<AuthState>((set, get) => ({
    accessToken: null,
    user: null,
    loading: false,
    clearState: () => {
        set({ accessToken: null, user: null, loading: false });
    },
    signUp: async (username, password, email, firstName, lastName) => {
        try {
            set({ loading: true });
            await authService.signUp(username, password, email, firstName, lastName);

            toast.success("Đăng ký thành công! Bạn sẽ chuyển sang trang đăng nhập.");

        } catch (error) {
            console.log(error);
            toast.error("Đăng ký không thành công");
        } finally {
            set({ loading: false });
        }
    },
    signIn: async (username, password) => {
        try {
            set({ loading: true });
            const data = await authService.signIn(username, password);

            set({ accessToken: data.accessToken, user: data.user });
            toast.success("Đăng nhập thành công!");
        } catch (error) {
            console.log(error);
            toast.error("Đăng nhập không thành công");
        } finally {
            set({ loading: false });
        }
    },
    signOut: async () => {
        try {
            get().clearState();
            set({ loading: true });
            await authService.signOut();
            toast.success("Đăng xuất thành công!");
        } catch (error) {
            console.log(error);
            toast.error("Đăng xuất không thành công");
        } finally {
            set({ loading: false });
        }
    }
}));