"use client"
import React, { useEffect } from 'react'
import DynamicTable from '../../components/DynamicTable/Table.component'
import DynamicTableComponent from '../../components/DynamicTable/Table.component';
import { useCounterStore } from '@/store/useStore';
import { Box, Button } from '@mui/material';
import { useStore } from '@/store/useStore';



const MasterComponent = ({serverData}: { serverData: any[] }) => {
  const { setData, data } = useStore();
  const { counter, increment, decrement, resetCounter } = useCounterStore();

  useEffect(() => {
    if (serverData.length) {
      setData(serverData);
    }
  }, [serverData, setData]);

  console.log(data, "dataaaaaa")
  return (
    <Box>
      {counter}
      <Button onClick={() => decrement}>Decrement</Button>

      <Button onClick={() => increment}>Increment</Button>

      <Button onClick={() => resetCounter()}>Reset</Button>

      {data?.map((item: any, i: any) => (
        <p key={i}>{item.title}</p>
      ))}
    </Box>
  )
}

export default MasterComponent