export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    token: string;
    user: {
      id: number;
      email: string;
      roles: { name: string }[];
    };
}

export interface RegisterCredentials {
    email: string;
    name: string;
    address: string;
    phone: string;
    password: string;
    password_confirmation: string;
}