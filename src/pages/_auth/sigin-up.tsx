import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sigin-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/_auth/sigin-up"!</div>
}
