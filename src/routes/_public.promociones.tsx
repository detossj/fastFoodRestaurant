import { createFileRoute } from '@tanstack/react-router'
import Promociones from '@/pages/Promociones'

export const Route = createFileRoute('/_public/promociones')({
  component: () => <Promociones />
})