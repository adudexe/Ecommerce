import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relavent");

  function toggleCategory(e) {
    if (category.includes(e.target.value)) {
      setCategory(c => c.filter(item => item !== e.target.value))
    }
    else {
      setCategory([...category, e.target.value])
    }
  }

  function togglesubCategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(c => c.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory([...subCategory, e.target.value])
    }
  }


  const applyFilter = () => {

    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productCopy)
  }


  const sortProduct = () => {

    const filterProductCopy = filterProducts;

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => (b.price - a.price)))
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => (a.price - b.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    applyFilter()
  }, [category, subCategory])


  useEffect(() => {
    setFilterProducts(products);
  }, [])

  useEffect(() => {
    sortProduct();
    console.log(sortType)
  }, [sortType])

  useEffect(() => {
    sortProduct();
  }, [])

  // useEffect(() => {
  //   console.log(subCategory)
  // }, [subCategory])


  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => (setShowFilter(!showFilter))} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          Filter  <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onClick={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onClick={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onClick={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onClick={togglesubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onClick={togglesubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onClick={togglesubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/*Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/*Produt Sort*/}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>

        {/*Map Poducts*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>


  )
}

export default Collection
