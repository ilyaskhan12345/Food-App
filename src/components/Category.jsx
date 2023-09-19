import React from 'react';
import { categories } from '../data/data';

const Category = () => {
    console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-2 py-12  '>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-4  '>
            {
            categories.map((item,index)=> (
                <div className='bg-gray-100 rounded-lg flex items-center justify-between p-4  ' key={index}>
                <h1 className='font-bold'>{item.name}</h1>
                <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Category;