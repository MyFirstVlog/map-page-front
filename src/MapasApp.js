import React from 'react'
import { SocketProvider } from './context/socketContext'
import { MapaPage } from './pages/MapaPage'

export const MapasApp = () => {
  return (
    <SocketProvider>
      <MapaPage />
    </SocketProvider>
  )
}
