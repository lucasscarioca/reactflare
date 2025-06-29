import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ['name'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const res = await api.name.$get()
      return await res.json()
    },
  })

  return (
    <>
      <h1>Reactflare Template</h1>
      <div className='flex min-h-svh flex-col items-center justify-center'>
        <Button disabled={isFetching} onClick={() => void refetch()}>
          Name from API is: {data?.name}
        </Button>
      </div>
    </>
  )
}
