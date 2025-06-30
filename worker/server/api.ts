import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { users } from '../../db/schema'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const server = new Hono<{ Bindings: Env }>()

export const app = server
	.get('/name', c => {
		return c.json({
			name: 'Reactflare Hono Backend',
		})
	})
	.get('/users', async c => {
		const db = drizzle(c.env.DB)
		const result = await db.select().from(users)
		return c.json(result)
	})
	.post(
		'/users',
		zValidator(
			'json',
			z.object({
				email: z.string().email(),
				password: z.string(),
			})
		),
		async c => {
			const db = drizzle(c.env.DB)
			const result = await db
				.insert(users)
				.values({
					email: c.req.valid('json').email,
					passwordHash: c.req.valid('json').password,
				})
				.returning()
			return c.json(result)
		}
	)
