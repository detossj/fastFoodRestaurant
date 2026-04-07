
import Postres from '@/pages/Postres'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/postres')({
  component: () => <Postres />
})