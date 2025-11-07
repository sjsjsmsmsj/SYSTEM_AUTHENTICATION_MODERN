import { toast } from 'sonner';
import { create } from 'zustand';
import { authService } from '../services/authService.ts';
import type { AuthState } from '@/types/store';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            accessToken: null,
            user: null,
            loading: true,

            setAccessToken: (accessToken: string | null) => {
                set({ accessToken });
            },

            checkAuth: async () => {
                try {
                    const accessToken = get().accessToken;
                    if (accessToken) {
                        const data = await authService.fetchMe();
                        set({ user: data, accessToken });
                    }
                } catch (error) {
                    get().clearState();
                } finally {
                    set({ loading: false });
                }
            },

            clearState: () => {
                set({ accessToken: null, user: null, loading: false });
            },

            signUp: async (username, password, email, firstName, lastName) => {
                try {
                    set({ loading: true });
                    await authService.signUp(username, password, email, firstName, lastName);
                    toast.success("Đăng ký thành công! Bạn sẽ chuyển sang trang đăng nhập.");
                } catch {
                    toast.error("Đăng ký không thành công");
                } finally {
                    set({ loading: false });
                }
            },

            signIn: async (username, password) => {
                try {
                    set({ loading: true });
                    const data = await authService.signIn(username, password);
                    get().setAccessToken(data.accessToken);

                    await get().checkAuth();
                    toast.success("Đăng nhập thành công!");
                } catch {
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
                } catch {
                    toast.error("Đăng xuất không thành công");
                } finally {
                    set({ loading: false });
                }
            },

            refresh: async () => {
                try {
                    set({ loading: true });
                    const { user, fetchMe, setAccessToken } = get();
                    const data = await authService.refresh();
                    setAccessToken(data.accessToken); // ✅ giờ sẽ chạy
                    if (!user) await fetchMe();
                } catch {
                    get().clearState();
                } finally {
                    set({ loading: false });
                }
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);
