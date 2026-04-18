import Redirection from '@/pages/Redirection'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/redirection')({
  component: () => <Redirection />
})