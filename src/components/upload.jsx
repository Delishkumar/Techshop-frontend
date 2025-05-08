import Dell1 from '../assets/delldesktop2.jpg'
import Dell2 from '../assets/dell desktop3.jpg'
import Dell3 from '../assets/delldesktop4.jpg'
import Dell4 from '../assets/delldesktop2.jpg'
import HP1 from '../assets/hpdesktop1.jpg'
import HP2 from '../assets/hpdesktop2.jpg'
import HP3 from '../assets/hpdesktop3.jpg'
import HP4 from '../assets/hpdesktop4.jpg'
import Lenovo1 from '../assets/lenovodesktop1.jpg'
import Lenovo2 from '../assets/lenovodesktop2.jpg'
import Lenovo3 from '../assets/lenovodesktop3.jpg'
import Lenovo4 from '../assets/lenovodesktop4.jpg'
import Asus1 from '../assets/asusdesktop1.jpg'
import Asus2 from '../assets/asusdesktop2.jpg'
import Asus3 from '../assets/asusdesktop3.jpg'
import Asus4 from '../assets/asusdesktop4.jpg'

import axios from 'axios';



  export default function Upload(){

    const products = [
   
        {
          id: 1,
          name: "Dell OptiPlex 3080",
          brand: "Dell",
          category: "desktop",
          price: 48000,
          rating: 4.2,
          image: Dell1,
          description: "Business-class Dell desktop with solid performance and security features.",
          details: "Intel i5-10400, 8GB DDR4, 1TB HDD, Intel UHD 630, 4x USB 3.2, HDMI, Win 11 Pro",
          stock: 8,
          createdAt: new Date()
        },
       
       
       
      
  
        {
            id: 2,
            name: "Asus ExpertCenter D7",
            brand: "Asus",
            category: "desktop",
            price: 56000,
            rating: 4.3,
            image: Asus3,
            description: "Business-focused desktop with quiet cooling and durability.",
            details: "Intel i7-11700, 16GB RAM, 1TB HDD + 256GB SSD, DP + HDMI + VGA, Win 11 Pro",
            stock: 6,
            createdAt: new Date()
          },
        {
          id: 3,
          name: "HP Pavilion TP01",
          brand: "HP",
          category: "desktop",
          price: 47000,
          rating: 4.1,
          image: HP1,
          description: "Stylish HP Pavilion desktop for home entertainment.",
          details: "AMD Ryzen 5 5600G, 8GB RAM, 512GB SSD, Radeon Graphics, 4x USB-A, HDMI, Win 11",
          stock: 7,
          createdAt: new Date()
        },
        {
            id: 4,
            name: "Dell Inspiron Tower 3910",
            brand: "Dell",
            category: "desktop",
            price: 52000,
            rating: 4.3,
            image: Dell2,
            description: "Powerful Inspiron tower for everyday use and multitasking.",
            details: "Intel i7-12700, 16GB DDR4, 512GB SSD, Intel UHD 770, Wi-Fi 6, BT 5.2, Win 11",
            stock: 5,
            createdAt: new Date()
          },
        {
          id: 5,
          name: "HP EliteDesk 800 G6",
          brand: "HP",
          category: "desktop",
          price: 75000,
          rating: 4.5,
          image: HP2,
          description: "Reliable enterprise desktop with advanced security.",
          details: "Intel i7-10700, 16GB DDR4, 512GB NVMe SSD, Intel UHD 630, DP + VGA, Win 11 Pro",
          stock: 4,
          createdAt: new Date()
        },
        {
          id: 6,
          name: "HP Omen 25L Gaming",
          brand: "HP",
          category: "desktop",
          price: 88000,
          rating: 4.7,
          image: HP3,
          description: "High-performance gaming desktop with aggressive cooling.",
          details: "AMD Ryzen 7 5700G, 16GB DDR4, 1TB SSD, RTX 3060 Ti, RGB case, Win 11",
          stock: 3,
          createdAt: new Date()
        },
       
      
        {
            id: 7,
            name: "Asus ROG Strix G10DK",
            brand: "Asus",
            category: "desktop",
            price: 88000,
            rating: 4.6,
            image: Asus2,
            description: "Performance gaming desktop with immersive features.",
            details: "Ryzen 7 3700X, 16GB RAM, 1TB SSD, GTX 1660 Ti, Aura Sync RGB, Win 11",
            stock: 5,
            createdAt: new Date()
          },
        {
          id: 8,
          name: "Lenovo IdeaCentre 3",
          brand: "Lenovo",
          category: "desktop",
          price: 39000,
          rating: 4.0,
          image: Lenovo1,
          description: "Efficient home desktop for multitasking and browsing.",
          details: "AMD Ryzen 3 3250U, 8GB RAM, 256GB SSD, Radeon Vega 3, USB-C, HDMI, Win 11",
          stock: 12,
          createdAt: new Date()
        },
        {
            id: 9,
            name: "HP ProDesk 400 G7",
            brand: "HP",
            category: "desktop",
            price: 42000,
            rating: 4.0,
            image: HP4,
            description: "Professional desktop with essential features for productivity.",
            details: "Intel i5-10500, 8GB RAM, 1TB HDD, DVD-RW, 6x USB, Win 11",
            stock: 9,
            createdAt: new Date()
          },
        {
            id: 10,
            name: "Dell Vostro Small Form",
            brand: "Dell",
            category: "desktop",
            price: 41000,
            rating: 4.0,
            image: Dell3,
            description: "Compact desktop ideal for small workspaces.",
            details: "Intel i3-12100, 8GB DDR4, 256GB SSD, 2x USB 3.0, Ethernet, VGA, Win 11",
            stock: 10,
            createdAt: new Date()
          },
        {
          id: 11,
          name: "Lenovo Legion T5",
          brand: "Lenovo",
          category: "desktop",
          price: 94000,
          rating: 4.6,
          image: Lenovo2,
          description: "Gaming desktop with bold design and powerful specs.",
          details: "Intel i7-12700F, 16GB RAM, 1TB SSD, RTX 3070, RGB Case, Wi-Fi 6, Win 11",
          stock: 4,
          createdAt: new Date()
        },
        {
          id: 12,
          name: "Lenovo ThinkCentre M70t",
          brand: "Lenovo",
          category: "desktop",
          price: 51000,
          rating: 4.3,
          image: Lenovo3,
          description: "Enterprise desktop with remote management and expansion.",
          details: "Intel i5-10500T, 8GB DDR4, 500GB HDD, Intel UHD, VGA/DP, Win 11 Pro",
          stock: 6,
          createdAt: new Date()
        },
        {
          id: 13,
          name: "Lenovo Yoga AIO 7",
          brand: "Lenovo",
          category: "desktop",
          price: 99000,
          rating: 4.7,
          image: Lenovo4,
          description: "Sleek AIO with 4K display and rotating screen for creators.",
          details: "Ryzen 7 5800H, 16GB RAM, 1TB SSD, 27\" 4K UHD Touch, AMD Radeon RX 6600M, Win 11",
          stock: 2,
          createdAt: new Date()
        },
      
        
        {
          id: 14,
          name: "Asus S500SA",
          brand: "Asus",
          category: "desktop",
          price: 46000,
          rating: 4.2,
          image: Asus1,
          description: "Compact and efficient desktop for everyday use.",
          details: "Intel i5-11400, 8GB DDR4, 512GB SSD, Intel UHD Graphics 730, USB-C, Win 11",
          stock: 7,
          createdAt: new Date()
        },
        {
            id: 15,
            name: "Dell XPS Desktop 8940",
            brand: "Dell",
            category: "desktop",
            price: 96000,
            rating: 4.6,
            image: Dell4,
            description: "Premium desktop with advanced cooling and high-end performance.",
            details: "Intel i7-11700K, 32GB DDR4, 1TB NVMe SSD, RTX 3060, Wi-Fi 6, Win 11 Home",
            stock: 2,
            createdAt: new Date()
          },
     
     
        {
          id: 16,
          name: "Asus Vivo AIO V241",
          brand: "Asus",
          category: "desktop",
          price: 72000,
          rating: 4.5,
          image: Asus4,
          description: "Elegant all-in-one desktop with FHD display and compact design.",
          details: "Intel i5-1135G7, 8GB RAM, 512GB SSD, 23.8\" FHD IPS, Wi-Fi, Bluetooth, Win 11",
          stock: 4,
          createdAt: new Date()
        }
      ];
      
      
      

    const uploadProducts = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/products', products, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Upload successful:', response.data);
        } catch (error) {
          console.error('Error uploading products:', error);
        }
      };

    return(
        <button className='bg-green-600 text-white' onClick={uploadProducts}>upload</button>
    )
  }