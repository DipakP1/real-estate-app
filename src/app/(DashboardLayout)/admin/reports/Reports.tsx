'use client';
import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useCounterStore, useStore } from '@/store/useStore';
import DynamicTableComponent from '../../components/DynamicTable/Table.component';


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
  { id: 2, name: 'Item 2', price: 30 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 2, name: 'Item 2', price: 30 },

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
const Reports = () => {

  return (
    <Box>
      <DynamicTableComponent
        rows={rows}
        headCells={headCells}
        title="Product List"
        enableSelect={true}
        enablePagination={true}
        enableSorting={true}
      />
    </Box>
  );
};

export default Reports;
