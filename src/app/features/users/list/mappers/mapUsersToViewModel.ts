
import type { UserListResponseDTO } from "../types/getUsersResponseDTO.types";
import type { UserViewModel } from "../types/UserViewModel";

export function mapUsersToViewModel(
    dto: UserListResponseDTO
): UserViewModel {
    return {
        id: dto.id,
        name: dto.name,
        user_name: dto.username,
        email: dto.email,
        phone_number: dto.phone,
        city: dto.address.city,
        zip_code: dto.address.zipcode,
    }
}