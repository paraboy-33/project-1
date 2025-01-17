import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: 1,
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      id: 2,
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 150,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      id: 3,
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 125,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pant',
    },
    {
      id: 4,
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 165,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pant',
    },
    {
      id: 5,
      name: 'Barca home jersey',
      slug: 'barca-home-jersey',
      category: 'jerseys',
      image: '/images/p5.jpg',
      price: 110,
      countInStock: 40,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 22,
      description: 'high quality jersey',
    },
    {
      id: 6,
      name: 'Real Madrid home jersey',
      slug: 'real-home-jersey',
      category: 'jerseys',
      image: '/images/p6.jpg',
      price: 110,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 22,
      description: 'high quality jersey',
    },
  ],
};

export default data;
