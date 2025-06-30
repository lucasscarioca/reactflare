import { Hono } from 'hono'

const server = new Hono<{ Bindings: Env }>()

export const app = server.get('/name', c => {
	return c.json({
		name: 'Reactflare Hono Backend',
	})
})
