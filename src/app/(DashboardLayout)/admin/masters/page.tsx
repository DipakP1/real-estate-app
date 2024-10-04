

import React from 'react'
import DynamicTable from '../../components/DynamicTable/Table.component'
import DynamicTableComponent from '../../components/DynamicTable/Table.component';
import MasterComponent from './Master';

const Master = async () => {
  let data: any;
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    console.log(res, "IM CALLING")
    data = await res.json();
  } catch (err: any) {
    throw err
  }
  return (
    <div>
      <MasterComponent serverData={data} />
    </div>
  )
}

export default Master
