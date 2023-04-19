import React from "react";
import axios from "axios";
import {atom, useRecoilState, useRecoilValue , selector} from "recoil";

const cartState = atom({
  key : "cartState",
  default : []
});


const cartTotalState = selector({
  key: "cartTotalState",
  get: ({get}) => {
    const cart = get(cartState);
    const total = cart.reduce((prev ,curr) => prev + curr.price ,0)

    return {

    }
  }
});


const productsQuery = selector({
  key : "Products",
  get: async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      return res.data || [];
    }catch(error) {
      console.log(`ERROR : \n${error}`)
      return [];
    }
  }
})

const FakeProducts = ({onAddCartItem}) => {

  const dummyProducts = useRecoilValue(productsQuery);
  
  return (
    <>
     <div className="l-flex">
        <div className="l-fg3">
          {
            dummyProducts.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt="" /> 
                <div className="card-body">
                  <h2>{product.title}</h2> 
                  <h5>{product.category}</h5>
                  <p>{product.description}</p>
                  <h5>(${product.price}) <button onClick={() => onAddCartItem(product)}Add></button></h5>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

const Basket = ({products , onRemoveCartItem , total}) => {
  <>
    <div className="title">Your basket {!products.length ? "" : products.length}</div>
    <div className="basket">
      {
        !products.length 
        ? "No Items"
        : products.map((product)=> (
          <p key={product.id}>
            {product.title} (${product.price})
            <button onClick={()=> onRemoveCartItem(product)}>Remove</button>
          </p>
        ))
      }
    </div>
    {!products.length ? "" :  <div className="total">TOTAL: ${total} </div>}
  </>
}

const App = ()=> {

  const [cart , setCart] = useRecoilState(cartState);

  const [{total} , setTotalFromSelector ] = useRecoilState(cartTotalState);

  const AddCardItem = (product) => {
    setCart((cart) => (
      cart.find((item) => item.id !== product.id)
      ? cart 
      : [...cart , product]
    ))
  }

  const removeCartItem = (product) => {
    setCart((cart)=> cart.filter((item)=> item.id !== product.id))
  }

  return (
    <div >
      <React.Suspense fallback={ <div>Loading ... </div>}>
        <FakeProducts onAddCartItem={AddCardItem}></FakeProducts>
      </React.Suspense>

      <div className="floatcart">
        <Basket total={total} setCart={setTotalFromSelector} products={cart} onRemoveCartItem={removeCartItem}/>
      </div>
    </div>
  );
}

export default App;
