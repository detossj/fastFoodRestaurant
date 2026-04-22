import Pedidos from '@/pages/Pedidos'
import { useAuthStore } from '@/stores/useAuthStore'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/pedidos')({
  beforeLoad: () => {
    const { token, rol } = useAuthStore.getState()

    if (!token) {
      throw redirect({ 
        to: '/login', 
        replace: true 
      })
    }

    if (rol === 'admin') {
      throw redirect({ 
        to: '/admin' as any, 
        replace: true 
      })
    }
  },
  component: () => <Pedidos />
})