import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProduct = [
  { 
    id: 'p1', 
    price: 6, 
    title: 'first Product',
    description: 'this is my first product'
   },
   { 
    id: 'p2', 
    price: 26, 
    title: 'second Product',
    description: 'this is my second product'
   },
   { 
    id: 'p3', 
    price: 56, 
    title: 'third Product',
    description: 'this is my third product'
   },
  ];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProduct.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
