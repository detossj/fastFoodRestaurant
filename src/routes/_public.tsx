import { createFileRoute } from '@tanstack/react-router'
import LayoutPublic from '../layouts/LayoutPublic'

export const Route = createFileRoute('/_public')({
  component: () => <LayoutPublic />,
})