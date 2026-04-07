import Acompañamientos from '@/pages/Acompañamientos'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/acompanamientos')({
  component: () => <Acompañamientos />
})