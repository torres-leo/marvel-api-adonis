import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Favorite from 'App/Models/Favorite'
import { Category } from 'Contracts/enums'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Favorite.createMany([
      {
        id: '7d50da3f-5903-4ef8-8ee4-cba0a908f26b',
        category: Category.CHARACTER,
        marvelId: 20,
        userId: '1cdd61ae-cf56-492f-9b62-8604d28110cd',
      },
      {
        id: 'fc347227-2a29-4f8f-b067-87d47c8dc0ed',
        category: Category.COMIC,
        marvelId: 20,
        userId: '101fd5ec-2b45-47f5-96aa-6e71602b36c9',
      },
    ])
  }
}
