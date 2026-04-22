import Perfil from '@/pages/Perfil'
import { useAuthStore } from '@/stores/useAuthStore'
import { createFileRoute, redirect } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/perfil')({
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
  component: () => <Perfil />
})