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
import SupplierProfile from './components/pages/SupplierProfile.tsx'
import NewSupplierForm from './components/pages/NewSupplierForm.tsx'
import UserProfile from './components/pages/UserProfile.tsx'
import UserSettings from './components/pages/UserSettings.tsx'
import TileDetail from './components/pages/TileDetail.tsx'
import NewTileForm from './components/pages/NewTileForm.tsx'
import StackDetail from './components/pages/StackDetail.tsx'
import NewStackForm from './components/pages/NewStackForm.tsx'

//Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="tiles/create" element={<NewTileForm />} />
      <Route path="tiles/:tileId" element={<TileDetail />} />
      <Route path="tiles/:tileId/edit" element={<TileDetail />} />
      <Route path="suppliers/create" element={<NewSupplierForm />} />
      <Route path="suppliers/:supplierName" element={<SupplierProfile />} />
      <Route
        path="suppliers/:supplierName/edit"
        element={<SupplierProfile />}
      />
      <Route path=":username" element={<UserProfile />} />
      <Route path=":username/settings" element={<UserSettings />} />
      <Route path=":username/create-stack" element={<NewStackForm />} />
      <Route path=":username/:stackId" element={<StackDetail />} />
      <Route path=":username/:stackId/edit" element={<StackDetail />} />
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
