import '@/app/styles/globals.css'
import type { ReactNode } from 'react'
import { StoreProvider } from './StoreProvider'

interface Props {
  readonly children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </StoreProvider>
  )
}
