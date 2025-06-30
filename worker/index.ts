import { app } from './server/api'

export type AppType = typeof app

export default {
	fetch(request, env, ctx) {
		return app.fetch(request, env, ctx)
	},
} satisfies ExportedHandler<Env>
