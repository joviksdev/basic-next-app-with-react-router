import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface SafeHydrateProps {
  children: ReactNode
}

const SafeHydrate = ({ children }: SafeHydrateProps) => {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

const App = () => {
  return (
    <SafeHydrate>
      <BrowserRouter>
        <h1>Databay</h1>
      </BrowserRouter>
    </SafeHydrate>
  )
}

export default App
