import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      { id: '1cdd61ae-cf56-492f-9b62-8604d28110cd', username: 'Leo', password: '123456l' },
      { id: '101fd5ec-2b45-47f5-96aa-6e71602b36c9', username: 'Bayola', password: '123456b' },
    ])
  }
}
