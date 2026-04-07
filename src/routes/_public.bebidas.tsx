import Bebidas from '@/pages/Bebidas'

import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/bebidas')({
  component: () => <Bebidas />
})