

import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import DashboardCard from '../../components/shared/DashboardCard'
import { Box, Typography } from '@mui/material'
import { IconBoxAlignBottomLeft } from '@tabler/icons-react'
import Reports from './Reports'


interface HeadCell<T> {
  id: keyof T;  // This ensures that id is one of the keys in your data type
  numeric: boolean;
  label: string;
}
interface Data {
  id: number;
  name: string;
  price: number;
}


const rows = [
  { id: 1, name: 'Item 1', price: 50 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 3, name: 'Item 2', price: 30 },
  { id: 4, name: 'Item 2', price: 30 },
  { id: 5, name: 'Item 2', price: 30 },
  { id: 6, name: 'Item 2', price: 30 },
  { id: 7, name: 'Item 2', price: 30 },
  { id: 8, name: 'Item 2', price: 30 },
  { id: 9, name: 'Item 2', price: 30 },

  // More rows...
];

const headCells: HeadCell<Data>[] = [
  { id: 'id', numeric: true, label: 'ID' },
  { id: 'name', numeric: false, label: 'Name' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'price', numeric: true, label: 'Price' },

];
const Master = async () => {

  return (
    <PageContainer title='Order Table' description='master-crm'>
      <DashboardCard title='Order Table' subtitle='View all the orders from the previous year.'>
        <>
          <Box>
            <Reports />
          </Box>
        </>
      </DashboardCard>
    </PageContainer>
  )
}

export default Master