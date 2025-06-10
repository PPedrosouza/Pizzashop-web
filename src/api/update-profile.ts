import { api } from "@/lib/axios";

interface UpdaeProfileBody{
    name: string
    description: string | null
}

export async function updateProfile({name, description}: UpdaeProfileBody) {
    await api.put('/profile', {name, description})
}