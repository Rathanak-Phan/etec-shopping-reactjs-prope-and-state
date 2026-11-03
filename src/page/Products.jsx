import React from 'react'

function Products({products}) {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-7xl'>
            <h2 className='text-center text-4xl my-10'>Explore products</h2>

            <div className='grid grid-cols-4 gap-2'>
                {products.map((product) => (
                    <div key={product.id} className='p-2 hover:border-gray-400 border-2 border-gray-200 rounded-md'>
                        <div className='h-52 w-full flex justify-center'>
                            <img className='h-full' src={product.image} alt="" />
                        </div>

                        <div className='p-3 flex flex-col gap-3'>
                            <p>{product.title}</p>
                            {product.price}

                            <button className='px-3 py-2 bg-green-600 rounded-lg text-gray-50'>Views</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products