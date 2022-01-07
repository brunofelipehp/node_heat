import { Request, Response } from "express"
import { ProfileUserSevice } from "../services/ProfileUserService"


class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request

        const service = new ProfileUserSevice()

        const result = await service.execute(user_id)


        return response.json(result)
    }
}

export { ProfileUserController }