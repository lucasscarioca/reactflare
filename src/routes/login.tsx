import { LoginForm } from '@/components/login-form'
import { Logo } from '@/components/logo'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
			<div className='flex w-full max-w-sm flex-col gap-6'>
				<Link
					to='/'
					className='flex items-center gap-2 self-center font-medium'
				>
					<Logo />
				</Link>
				<LoginForm />
			</div>
		</div>
	)
}
