import React from "react";
import laptop from '../assets/laptop-g.jpg'
import mobile from '../assets/Tablets-g.jpg'
import headphone from '../assets/Headphones-g.jpg'
import smartwatch from '../assets/Smartwatches-g.jpg'
import computers from '../assets/Desktops-g.jpg'
import moniters from  '../assets/monters-g.jpg'
import { NavLink } from 'react-router-dom';
const categories = [
  {
    name: "Laptops",
    image: laptop,
    path:"/laptop"
  },
  {
    name: "Mobile&Tablets",
    image: mobile,
    path:"/tablet"
  },
  {
    name: "Headphones",
    image: headphone,
    path:"/product"
  },
  {
    name: "Smartwatchs",
    image: smartwatch,
    path:"/smartwatch"
  },
  {
    name: "Desktops",
    image: computers,
    path:"/desktop"
  },
  {
    name: "Monitors",
    image: moniters,
    path:"/monitor"
  },
];

const CategoryGrid = () => {
  return (
    <section className="px-4 m-0  max-w-7xl mx-auto mt-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Shop by Category</h2>
      <div className="grid gap-8 grid-cols-3 md:grid-cols-6  ">
        {categories.map((category, index) => (
          
          <div
            
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border hover:border-blue-700 transition duration-300 cursor-pointer"
          >
            <NavLink
          to={category.path}
          key={index}>
            <img src={category.image} alt={category.name} className="w-full h-34 object-cover" />
            <div className="p-2  text-center text-base md:text-lg font-medium">
              {category.name}
              
            </div>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
