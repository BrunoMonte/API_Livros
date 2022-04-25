import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UserStoresController {
  public async store({ response, request }: HttpContextContract) {
    try {
      const body = request.only(['name', 'email', 'password', 'office'])
      const user = await User.create(body)

      return response.status(201).send({ message: 'User created successfully!', user })
    } catch (error) {
      return response.status(400).send({ message: 'Failed to register user !', error })
    }
  }
}
