import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Category } from '../../contracts/enums'

export default class extends BaseSchema {
  protected tableName = 'favorites'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.enum('category', Object.values(Category)).defaultTo(Category.CHARACTER).notNullable()
      table.integer('marvel_id').notNullable()
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
