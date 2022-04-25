import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UserListsController {
  public async index({ response }: HttpContextContract) {
    const user = await User.all()
    return response.status(200).json(user)
  }
}
