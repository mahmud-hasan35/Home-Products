import ProductItems from "./ProductItems"


function ProductList() {
  const Products = [
    {
        "id": "1",
        "title": "Elegant Queen Bed",
        "image": "b-1.jpg",
        "description": "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
        "price": 52.5,
        "ratting": 3.5,
        "category": "bed"
    },
    {
        "id": "2",
        "title": "Comfort King Bed",
        "image": "b-2.jpg",
        "description": "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
        "price": 105.0,
        "ratting": 3.8,
        "category": "bed"
    },
    {
        "id": "3",
        "title": "Stylish Single Bed",
        "image": "b-3.jpg",
        "description": "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
        "price": 157.5,
        "ratting": 4.1,
        "category": "bed"
    },
    {
        "id": "4",
        "title": "Modern Bed Frame",
        "image": "b-4.jpg",
        "description": "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
        "price": 210.0,
        "ratting": 4.4,
        "category": "bed"
    },
    {
        "id": "5",
        "title": "Luxury Upholstered Bed",
        "image": "b-5.jpg",
        "description": "This bed offers a perfect blend of style and comfort, featuring a durable frame and luxurious design. It complements any decor while ensuring lasting durability. A great choice for a cozy retreat.",
        "price": 262.5,
        "ratting": 4.7,
        "category": "bed"
    },
    {
        "id": "6",
        "title": "Modern Pendant Light",
        "image": "l-1.jpg",
        "description": "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
        "price": 65.0,
        "ratting": 3.5,
        "category": "light"
    },
    {
        "id": "7",
        "title": "Chandelier Light",
        "image": "l-2.jpg",
        "description": "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
        "price": 117.5,
        "ratting": 3.8,
        "category": "light"
    },
    {
        "id": "8",
        "title": "Adjustable Desk Lamp",
        "image": "l-3.jpg",
        "description": "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
        "price": 170.0,
        "ratting": 4.1,
        "category": "light"
    },
    {
        "id": "9",
        "title": "LED Floor Lamp",
        "image": "l-4.jpg",
        "description": "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
        "price": 222.5,
        "ratting": 4.4,
        "category": "light"
    },
    {
        "id": "10",
        "title": "Vintage Wall Light",
        "image": "l-5.jpg",
        "description": "Illuminate your home with this stylish and energy-efficient light. Crafted with high-quality materials, it provides a warm ambiance and is perfect for any modern interior.",
        "price": 275.0,
        "ratting": 4.7,
        "category": "light"
    },
    {
        "id": "11",
        "title": "Classic Wall Clock",
        "image": "c-1.jpg",
        "description": "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
        "price": 77.5,
        "ratting": 3.5,
        "category": "wall clock"
    },
    {
        "id": "12",
        "title": "Retro Wall Clock",
        "image": "c-2.jpg",
        "description": "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
        "price": 130.0,
        "ratting": 3.8,
        "category": "wall clock"
    },
    {
        "id": "13",
        "title": "Minimalist Wall Clock",
        "image": "c-3.jpg",
        "description": "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
        "price": 182.5,
        "ratting": 4.1,
        "category": "wall clock"
    },
    {
        "id": "14",
        "title": "Antique Wall Clock",
        "image": "c-4.jpg",
        "description": "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
        "price": 235.0,
        "ratting": 4.4,
        "category": "wall clock"
    },
    {
        "id": "15",
        "title": "Rustic Wall Clock",
        "image": "c-5.jpg",
        "description": "This wall clock combines functionality with style. Featuring a timeless design and precise quartz movement, it makes a perfect addition to any room in your home.",
        "price": 287.5,
        "ratting": 4.7,
        "category": "wall clock"
    },
    {
        "id": "16",
        "title": "Vintage Mirror with Frame",
        "image": "m-1.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 90.0,
        "ratting": 3.5,
        "category": "mirror"
    },
    {
        "id": "17",
        "title": "Oval Vanity Mirror",
        "image": "m-2.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 142.5,
        "ratting": 3.8,
        "category": "mirror"
    },
    {
        "id": "18",
        "title": "Round Frameless Mirror",
        "image": "m-3.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 195.0,
        "ratting": 4.1,
        "category": "mirror"
    },
    {
        "id": "19",
        "title": "Wall Mounted Mirror",
        "image": "m-4.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 247.5,
        "ratting": 4.4,
        "category": "mirror"
    },
    {
        "id": "20",
        "title": "Full-Length Mirror",
        "image": "m-5.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 300.0,
        "ratting": 4.7,
        "category": "mirror"
    },
    {
        "id": "21",
        "title": "Stylish Dining Chair",
        "image": "f-1.jpg",
        "description": "Comfortable and modern, this dining chair is the perfect addition to your dining area. It features high-quality materials and a sleek design.",
        "price": 70.0,
        "ratting": 3.5,
        "category": "furniture"
    },
    {
        "id": "22",
        "title": "Modern Armchair",
        "image": "f-2.jpg",
        "description": "Comfortable and modern, this armchair is the perfect addition to your living area. It features high-quality materials and a sleek design.",
        "price": 125.0,
        "ratting": 3.8,
        "category": "furniture"
    },
    {
        "id": "23",
        "title": "Standing Mirror",
        "image": "m-8.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 457.5,
        "ratting": 4.1,
        "category": "mirror"
    },
    {
        "id": "24",
        "title": "Beveled Edge Mirror",
        "image": "m-9.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 510.0,
        "ratting": 4.4,
        "category": "mirror"
    },
    {
        "id": "25",
        "title": "Gold Framed Mirror",
        "image": "m-10.jpg",
        "description": "This mirror features a sleek and elegant design, perfect for enhancing the aesthetics of any room. Its high-quality reflective surface ensures clarity and style.",
        "price": 562.5,
        "ratting": 4.7,
        "category": "mirror"
    },
    {
        "id": "26",
        "title": "Dining Table Set for Six",
        "image": "t-1.jpg",
        "description": "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
        "price": 115.0,
        "ratting": 3.5,
        "category": "dining table"
    },
    {
        "id": "27",
        "title": "Wooden Dining Table Set",
        "image": "t-2.jpg",
        "description": "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
        "price": 167.5,
        "ratting": 3.8,
        "category": "dining table"
    },
    {
        "id": "28",
        "title": "Glass Top Dining Table",
        "image": "t-3.jpg",
        "description": "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
        "price": 220.0,
        "ratting": 4.1,
        "category": "dining table"
    },
    {
        "id": "29",
        "title": "Compact Dining Table",
        "image": "t-4.jpg",
        "description": "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
        "price": 272.5,
        "ratting": 4.4,
        "category": "dining table"
    },
    {
        "id": "30",
        "title": "Extendable Dining Table",
        "image": "t-5.jpg",
        "description": "This dining table set combines durability and elegance, making it a perfect choice for family meals or gatherings. Its spacious design and sturdy construction ensure years of use.",
        "price": 325.0,
        "ratting": 4.7,
        "category": "dining table"
    }
]
   
    
  return (
    <div className='col-span-9 bg-white p-3'>
    <h2 className='text-3xl font-bold mb-5 '>Our products</h2>
    <div className="grid grid-cols-12 gap-4">
        {Products.map(Product => <ProductItems key={Product.id} Products={Product}/>)}
       
    </div>
  </div>
  )
}

export default ProductList