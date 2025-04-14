export interface User {
    id: bigint;
    username: string;
    email: string;
    favorites: [];
    notifications: [];
}