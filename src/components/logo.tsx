import { Zap } from 'lucide-react'

export function Logo() {
	return (
		<div className='flex items-center space-x-2'>
			<Zap className='h-6 w-6 text-primary' />
			<span className='text-xl font-bold'>Reactflare Template</span>
		</div>
	)
}
