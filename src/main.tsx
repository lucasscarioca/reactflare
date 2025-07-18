import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme-provider'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const queryClient = new QueryClient()

// Render the app
const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
					<RouterProvider router={router} />
				</ThemeProvider>
			</QueryClientProvider>
		</StrictMode>
	)
}
