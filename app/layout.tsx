import { WebSocketProvider } from "@/app/providers/webSocketProvider";
import "@/app/styles/globals.css";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <WebSocketProvider>
      <html lang="en">
        <body>
            <main>{children}</main>
        </body>
      </html>
      </WebSocketProvider>
    </StoreProvider>
  );
}
