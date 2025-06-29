import { Link, createFileRoute } from '@tanstack/react-router'
import {
	ArrowRight,
	Check,
	Star,
	Zap,
	Cloud,
	Database,
	Lock,
	CreditCard,
	Palette,
	Menu,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Logo } from '@/components/logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Route = createFileRoute('/')({
	component: LandingPage,
})

function LandingPage() {
	return (
		<div className='min-h-screen bg-background flex flex-col'>
			{/* Navigation */}
			<nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
				<div className='container mx-auto flex h-16 items-center justify-between'>
					<Logo />
					<div className='hidden md:flex items-center space-x-4'>
						<a
							href='#pricing'
							className='text-sm font-medium text-muted-foreground hover:text-foreground'
						>
							Pricing
						</a>
						<a
							href='#faq'
							className='text-sm font-medium text-muted-foreground hover:text-foreground'
						>
							FAQ
						</a>
						<Button variant='outline' asChild>
							<Link to='/login'>Sign In</Link>
						</Button>
						<Button asChild>
							<Link to='/register'>Sign Up</Link>
						</Button>
					</div>
					<div className='md:hidden'>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='ghost' size='icon'>
									<Menu className='h-6 w-6' />
								</Button>
							</SheetTrigger>
							<SheetContent side='right'>
								<div className='h-full flex flex-col gap-8 p-4'>
									<div className='flex shrink w-full items-center gap-4'>
										<Button variant='outline' asChild>
											<Link to='/login'>Sign In</Link>
										</Button>
										<Button asChild>
											<Link to='/register'>Sign Up</Link>
										</Button>
									</div>
									<div className='flex-1 flex flex-col gap-2'>
										<Button
											variant='ghost'
											className='justify-start'
											asChild
										>
											<a href='#pricing'>Pricing</a>
										</Button>
										<Button
											variant='ghost'
											className='justify-start'
											asChild
										>
											<a href='#faq'>FAQ</a>
										</Button>
									</div>
									<div className='shrink flex items-center justify-end w-full'>
										<ThemeToggle />
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className='flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
				<div className='container mx-auto py-16 sm:py-24 flex flex-col items-center justify-center text-center'>
					<div className='mx-auto max-w-4xl'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
							A Modern SaaS Template with{' '}
							<span className='text-primary block'>
								React & Cloudflare
							</span>
						</h1>
						<p className='mt-6 text-base sm:text-lg md:text-xl text-muted-foreground'>
							A production-ready, open-source SaaS template using
							the best of the modern web. Built for developers who
							want to ship fast.
						</p>
						<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
							<Button size='lg' className='w-full sm:w-auto'>
								Get Started
								<ArrowRight className='ml-2 h-4 w-4' />
							</Button>
							<Button
								variant='outline'
								size='lg'
								className='w-full sm:w-auto'
							>
								Star on GitHub
							</Button>
						</div>
						<div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground'>
							<div className='flex items-center space-x-2'>
								<Check className='h-4 w-4 text-green-500' />
								<span>Powered by Vite & Hono</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Check className='h-4 w-4 text-green-500' />
								<span>Serverless on Cloudflare</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Check className='h-4 w-4 text-green-500' />
								<span>Open Source</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>
						Everything you need to build and launch
					</h2>
					<p className='mt-4 text-base sm:text-lg text-muted-foreground'>
						This template comes with a powerful, type-safe, and
						modern stack out of the box.
					</p>
				</div>
				<div className='mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
					{features.map(feature => (
						<div
							key={feature.title}
							className='rounded-lg border bg-card p-6 flex flex-col items-center text-center'
						>
							<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
								<feature.icon className='h-6 w-6 text-primary' />
							</div>
							<h3 className='mb-2 text-lg font-semibold'>
								{feature.title}
							</h3>
							<p className='text-muted-foreground'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Pricing Section */}
			<section
				id='pricing'
				className='container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8'
			>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>
						Simple, transparent pricing
					</h2>
					<p className='mt-4 text-base sm:text-lg text-muted-foreground'>
						Choose the plan that's right for your business. All
						plans include our core features.
					</p>
				</div>
				<div className='mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{pricingPlans.map(plan => (
						<div
							key={plan.name}
							className={`rounded-lg relative border bg-card p-8 flex flex-col items-center text-center ${
								plan.popular ? 'border-primary shadow-lg' : ''
							}`}
						>
							{plan.popular && (
								<div className='mb-4 absolute left-2 top-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>
									<Star className='mr-1 h-4 w-4' />
									Most Popular
								</div>
							)}
							<h3 className='text-2xl font-bold'>{plan.name}</h3>
							<div className='mt-4 flex items-baseline justify-center'>
								<span className='text-4xl font-bold'>
									${plan.price}
								</span>
								<span className='ml-1 text-muted-foreground'>
									/month
								</span>
							</div>
							<p className='mt-2 text-sm text-muted-foreground'>
								{plan.description}
							</p>
							<ul className='mt-6 space-y-3 flex-1'>
								{plan.features.map(feature => (
									<li
										key={feature}
										className='flex items-center justify-center'
									>
										<Check className='mr-2 h-4 w-4 text-green-500' />
										<span className='text-sm'>
											{feature}
										</span>
									</li>
								))}
							</ul>
							<Button
								className={`mt-8 w-full ${
									plan.popular ? '' : 'variant-outline'
								}`}
							>
								{plan.popular
									? 'Start Free Trial'
									: 'Get Started'}
							</Button>
						</div>
					))}
				</div>
			</section>

			{/* FAQ Section */}
			<section
				id='faq'
				className='container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8'
			>
				<div className='mx-auto max-w-4xl'>
					<div className='text-center'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>
							Frequently asked questions
						</h2>
						<p className='mt-4 text-base sm:text-lg text-muted-foreground'>
							Everything you need to know about our platform and
							pricing.
						</p>
					</div>
					<div className='mt-12 sm:mt-16'>
						<Accordion type='single' collapsible className='w-full'>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
								>
									<AccordionTrigger className='text-lg font-semibold hover:no-underline'>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent>
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-4xl rounded-lg border bg-card p-8 sm:p-12 text-center'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>
						Ready to get started?
					</h2>
					<p className='mt-4 text-base sm:text-lg text-muted-foreground'>
						Join thousands of businesses that trust our platform to
						grow their operations.
					</p>
					<div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
						<Button size='lg' className='w-full sm:w-auto'>
							Start Your Free Trial
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='w-full sm:w-auto'
						>
							Contact Sales
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='border-t bg-background mt-auto'>
				<div className='container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
					<div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
						<div className='space-y-4'>
							<Logo />
							<p className='text-sm text-muted-foreground'>
								Empowering developers with modern SaaS solutions
								for the digital age.
							</p>
						</div>
						<div>
							<h4 className='font-semibold'>Product</h4>
							<ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Features
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Integrations
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										API
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold'>Company</h4>
							<ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										About
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold'>Support</h4>
							<ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Help Center
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Status
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-foreground'
									>
										Security
									</a>
								</li>
							</ul>
						</div>
					</div>
					<Separator className='my-8' />
					<div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
						<p className='text-sm text-muted-foreground text-center sm:text-left'>
							© 2024 Reactflare Template. All rights reserved.
						</p>
						<div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
							<div className='flex space-x-6 text-sm text-muted-foreground'>
								<a href='#' className='hover:text-foreground'>
									Privacy Policy
								</a>
								<a href='#' className='hover:text-foreground'>
									Terms of Service
								</a>
								<a href='#' className='hover:text-foreground'>
									Cookie Policy
								</a>
							</div>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

const features = [
	{
		title: 'React + Vite',
		description:
			'Modern, fast, and powerful frontend development with React and Vite tooling.',
		icon: Zap,
	},
	{
		title: 'Hono on Cloudflare',
		description:
			'Build your backend on the edge. Blazing fast, lightweight, and secure APIs with Hono on Cloudflare Workers.',
		icon: Cloud,
	},
	{
		title: 'Drizzle ORM',
		description:
			'A lightweight and powerful TypeScript ORM for your database, ensuring type-safe SQL.',
		icon: Database,
	},
	{
		title: 'Authentication Included',
		description:
			'Secure and easy-to-implement authentication system using "Better Auth".',
		icon: Lock,
	},
	{
		title: 'Stripe Payments',
		description:
			'Pre-configured Stripe integration for seamless and secure payment processing.',
		icon: CreditCard,
	},
	{
		title: 'Shadcn UI + Tailwind',
		description:
			'Beautiful, accessible, and customizable UI components powered by Shadcn and Tailwind CSS.',
		icon: Palette,
	},
]

const pricingPlans = [
	{
		name: 'Starter',
		price: '29',
		description: 'Perfect for small teams getting started.',
		features: [
			'Up to 5 team members',
			'Basic analytics',
			'Email support',
			'10GB storage',
			'Core features',
		],
		popular: false,
	},
	{
		name: 'Professional',
		price: '99',
		description: 'Ideal for growing businesses.',
		features: [
			'Up to 25 team members',
			'Advanced analytics',
			'Priority support',
			'100GB storage',
			'All features',
			'Custom integrations',
		],
		popular: true,
	},
	{
		name: 'Enterprise',
		price: '299',
		description: 'For large organizations with complex needs.',
		features: [
			'Unlimited team members',
			'Custom analytics',
			'Dedicated support',
			'Unlimited storage',
			'All features',
			'Custom integrations',
			'SLA guarantee',
			'On-premise option',
		],
		popular: false,
	},
]

const faqs = [
	{
		question: 'What is included in the free trial?',
		answer: 'The free trial includes access to all features for 14 days. No credit card required to start.',
	},
	{
		question: 'Can I cancel my subscription anytime?',
		answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.',
	},
	{
		question: 'Do you offer refunds?',
		answer: 'We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.',
	},
	{
		question: 'Is my data secure?',
		answer: 'Absolutely. We use enterprise-grade security with end-to-end encryption and comply with industry standards.',
	},
	{
		question: 'Do you provide customer support?',
		answer: 'Yes, we offer 24/7 customer support via email, chat, and phone for all paid plans.',
	},
	{
		question: 'Can I upgrade or downgrade my plan?',
		answer: 'Yes, you can change your plan at any time. Changes take effect immediately and are prorated.',
	},
]
