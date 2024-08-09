import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CreateRoom } from './pages/create-room'
import { Room } from './pages/room'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom/>
  },
  {
    path: '/room/:roomId',
    element: <Room/>
  }
]) 

export function App() {
  return (
    <>  {/*No react não podemos renderizar um elemento abaixo do outro sem ter nada em volta, por isso utilizamos o fragment <> */}
      <RouterProvider router={router} />
      <Toaster invert richColors/>
    </>
    
  )
}


