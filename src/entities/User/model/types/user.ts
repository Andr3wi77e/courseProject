import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    avatar?: string;
}

export interface UserSchema {
    authData?: User | null;
    _mounted: boolean;
}
