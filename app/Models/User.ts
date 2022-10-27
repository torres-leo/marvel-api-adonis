import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  // beforeSave,
  column,
  HasMany,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm'
// import { v4 as uuidv4 } from 'uuid'
import { hashPassword } from '../../utils'
import Favorite from './Favorite'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public username: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static saveUsername(user: User) {
    // user.id = uuidv4()
    user.username = user.username.trim().toLocaleLowerCase()
    user.password = hashPassword(user.password.trim())
  }

  @hasMany(() => Favorite)
  public favorites: HasMany<typeof Favorite>
}
