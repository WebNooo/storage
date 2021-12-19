import { Instance } from "./instance"

export const FileApi = {
    upload: async (data: any) => {
        return await Instance.post('/file/upload', data).then(response => response.data)
    }
}