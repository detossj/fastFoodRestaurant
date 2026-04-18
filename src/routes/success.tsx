import Success from '@/pages/Sucess'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/success')({
  component: () => <Success />
})