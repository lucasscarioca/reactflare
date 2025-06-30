import { sql } from 'drizzle-orm'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
	id: int().primaryKey({ autoIncrement: true }),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	createdAt: int('created_at', { mode: 'timestamp_ms' })
		.notNull()
		.default(sql`(STRFTIME('%s', 'now') * 1000)`),
	updatedAt: int('updated_at', { mode: 'timestamp_ms' })
		.notNull()
		.default(sql`(STRFTIME('%s', 'now') * 1000)`),
})
