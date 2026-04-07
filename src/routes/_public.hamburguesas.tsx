
import Hamburguesas from '@/pages/Hamburguesas'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/hamburguesas')({
  component: () => <Hamburguesas />
})