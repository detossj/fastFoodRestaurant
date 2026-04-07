import Pizzas from '@/pages/Pizzas'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/pizzas')({
  component: () => <Pizzas />
})