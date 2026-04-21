import Perfil from '@/pages/Perfil'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/perfil')({
  component: () => <Perfil />
})