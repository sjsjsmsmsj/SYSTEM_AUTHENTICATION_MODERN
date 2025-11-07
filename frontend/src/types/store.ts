import type { User } from "./user";

export interface AuthState {
    accessToken: string | null;
    user: User | null;
    loading: boolean;
    setAccessToken: (accessToken: string) => {
        set({ accessToken: accessToken });
    };
    clearState: () => {
        set({ accessToken: null, user: null, loading: null })
    }
    signUp: (username: string, password: string, email: string, firstName: string, lastName: string) => Promise<void>;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    fetchMe: () => Promise<void>;
    refresh: () => Promise<void>;

}