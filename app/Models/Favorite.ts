import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Category } from 'Contracts/enums'
import User from './User'

export default class Favorite extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public marvelId: number

  @column()
  public userId: string

  @column()
  public category: Category

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
