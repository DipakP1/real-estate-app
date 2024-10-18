// components/ClientWrapper.tsx
"use client";

import { SnackbarProvider } from "notistack";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider maxSnack={3}>
      {children}
    </SnackbarProvider>
  );
}
