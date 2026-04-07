import Locales from '@/pages/Locales'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_public/locales')({
  component: () => <Locales />
})