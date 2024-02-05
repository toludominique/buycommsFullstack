/*  "use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineStarBorder } from 'react-icons/md';
import { IoAddCircle } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '@/Redux/productSlice'; */

function page() {

 /*    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
   */
    //const {data, pending} = useSelector((state) => state.product)
   /*  useEffect(() => {
        const singleProduct = async () => {
          try {
            const res = await fetch(
              `http://localhost:8800/popularproducts`,
              {
                cache: 'no-store',
              }
            );
    
          
    
            if(!res.ok) {
              throw new Error('error')
            }
    
            const data = await res.json();
          
           setProduct(data);
          setLoading(false)
          } catch (error) {
            console.log(error);
            setLoading(false)
          }
        };
        singleProduct();
      }, []);
    
      if(loading) {
        return <h1>LOADING...</h1>
      }
     */
     //console.log(product)
    /*  const dispatch = useDispatch()
    
     useEffect(() => {
        dispatch(getData())
     },[])
     console.log(data) */
  /* 
  return (
    <div className="flex justify-between gap-5">
        
        {data?.map((item) => (
          <div key={item.id}>
            <Link href={`/prodPage/${item.id}`}>
              <div
                key={item.id}
                className="bg-slate-200 relative mb-2 rounded-md w-60 h-80"
              >
                <Image className=" absolute"  src={`http://localhost:8800/${item.image}`} alt=""  objectFit='cover' fill={true}/>
                <div className="absolute  w-7 h-7 bg-white ml-2 mt-2 rounded-full">
                  <FaRegHeart className="ml-1 mt-2" />
                </div>
              </div>
            </Link>

            <div>
              <p className="text-xs font-bold">{item.name}</p>
              <p className="text-xs">{item.desc}</p>
              <div className="flex w-60 justify-between">
                <div className="">
                  <div className="flex gap-2">
                    <MdOutlineStarBorder />
                    <p className="text-xs">4.7</p>
                    <div className=" w-15 h-5 bg-slate-200 rounded-md">
                      <p className="text-xs font-bold">7,428 Sold</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-sm">{item.price}</p>
                    <p className="text-sm font-bold">N{item.price}</p>
                  </div>
                </div>

                <IoAddCircle size={40} />
              </div>
            </div>
          </div>
        ))}  
    </div>
  ) */
}

export default page 