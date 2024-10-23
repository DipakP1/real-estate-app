// components/ClientWrapper.tsx
"use client";

import { SnackbarProvider } from "notistack";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
    </LocalizationProvider>
  );
}
