export interface CreateUserPayload {
    name: string,
    username: string,
    email: string,
    phone: string,
    address: {
        city: string;
    };
}