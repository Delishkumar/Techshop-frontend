// ProductNavbar.jsx
import { NavLink } from 'react-router-dom';
import {
  Laptop,
  Headphones,
  Watch,
  TabletSmartphone,
  Monitor,
  Server,
} from 'lucide-react';

const categories = [
  
  { name: 'Headphone', icon: <Headphones className="w-5 h-5" />, path: '/headphone' },
  { name: 'Smartwatch', icon: <Watch className="w-5 h-5" />, path: '/smartwatch' },
  { name: 'Tablet', icon: <TabletSmartphone className="w-5 h-5" />, path: '/tablet' },
  { name: 'Monitor', icon: <Monitor className="w-5 h-5" />, path: '/monitor' },
  { name: 'Desktop', icon: <Server className="w-5 h-5" />, path: '/desktop' },
  { name: 'Laptop', icon: <Laptop className="w-5 h-5" />, path: '/laptop' },
];

const ProductNavbar = () => {
  return (
    <nav className="  bg-slate-100 shadow-md rounded-xl px-4 py-2 sticky z-50 top-14">
      <div className="grid grid-cols-3 md:grid-cols-6  min-w-max  gap-2 ">
        {categories.map((category) => (
          <NavLink
            to={category.path}
            key={category.name}
            className={({ isActive }) =>
              `flex items-center gap-2 md:px-3 md:py-2 rounded-md whitespace-nowrap transition-all ${
                isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'hover:bg-gray-100 text-gray-700'
              }`
            }
          >
            {category.icon}
            <span className="text-sm">{category.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default ProductNavbar;

