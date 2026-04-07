import Extras from '@/pages/Extras'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/extras')({
  component: () => <Extras />
})