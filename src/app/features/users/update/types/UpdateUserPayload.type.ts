export interface UpdateUserPayload {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    address: {
        city: string;
    };
}