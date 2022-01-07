import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
    async handle(request: Request, response: Response) {

        //Aqui é pego o codigo gerado ao acessa http://localhos:4000/github
        // http://localhost:4000/signin/callback?code
        const { code } = request.body

        const service = new AuthenticateUserService()

        try {
            const result = await service.excute(code)
            return response.json(result)
        } catch (err) {
            return response.json({ error: err.message })
        }


    }
}

export { AuthenticateUserController }