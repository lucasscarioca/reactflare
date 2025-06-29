import { ForgotPasswordForm } from '@/components/forgot-password-form'
import { createFileRoute } from '@tanstack/react-router'
import { Zap } from 'lucide-react'

export const Route = createFileRoute('/forgot-password')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
			<div className='flex w-full max-w-sm flex-col gap-6'>
				<a
					href='#'
					className='flex items-center gap-2 self-center font-medium'
				>
					<div className='flex items-center gap-2 font-bold'>
						<Zap className='size-5 text-primary' />
						Reactflare Template
					</div>
				</a>
				<ForgotPasswordForm />
			</div>
		</div>
	)
}
