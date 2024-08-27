import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

//Import pages
import App from './components/App.tsx'
import Home from './components/pages/Home.tsx'
import BusinessPage from './components/pages/BusinessPage.tsx'
import UserProfile from './components/pages/UserProfile.tsx'
import StackDetail from './components/pages/StackDetail.tsx'
import TileDetail from './components/pages/TileDetail.tsx'

//Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="tiles/new" element={<TileDetail />} />
      <Route path="tiles/:tileId" element={<TileDetail />} />
      <Route path="tiles/:tileId/edit" element={<TileDetail />} />
      <Route path="suppliers/:supplierName" element={<BusinessPage />} />
      <Route path=":username" element={<UserProfile />} />
      <Route path=":username/:stackId" element={<StackDetail />} />
    </Route>,
  ),
)

//Define queryclient
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>,
  )
})
