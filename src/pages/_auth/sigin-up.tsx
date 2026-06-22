import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '../../components/RegisterForm'

export const Route = createFileRoute('/_auth/sigin-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <RegisterForm />
  )
}
  