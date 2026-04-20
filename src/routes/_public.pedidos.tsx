
import Pedidos from '@/pages/Pedidos'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/pedidos')({
  component: () => <Pedidos />
})