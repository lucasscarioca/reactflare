import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@tanstack/react-router'

export function ForgotPasswordForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader className='text-center'>
					<CardTitle className='text-xl'>Forgot your password?</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className='grid gap-6'>
							<div className='grid gap-3'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='m@example.com'
									required
								/>
							</div>
							<Button type='submit' className='w-full'>
								Send reset link
							</Button>
							<div className='text-center text-sm'>
								<Link
									to='/login'
									className='underline underline-offset-4'
								>
									Back to login
								</Link>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
