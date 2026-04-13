import { createFileRoute, redirect } from '@tanstack/react-router'
import LayoutPublic from '../layouts/LayoutPublic'
import { useAuthStore } from '@/stores/useAuthStore'

export const Route = createFileRoute('/_auth')({
  beforeLoad: () => {
    const { token, rol } = useAuthStore.getState()

    if (token) {
      if (rol === 'admin') throw redirect({ to: '/admin' as any, replace: true })
      throw redirect({ to: '/', replace: true })
    }
  },
  component: () => <LayoutPublic />
})