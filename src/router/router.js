import { stories } from '@/components/stories'
import { feeds } from '../pages/feeds/'

export default [
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  }
]
