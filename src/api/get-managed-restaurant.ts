import { api } from "@/lib/axios"

interface GetManagedRestaurauntResponse{
    id: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function getManagedRestauraunt() {
    const response = await api.get<GetManagedRestaurauntResponse>('/managed-restaurant')

    return response.data
}