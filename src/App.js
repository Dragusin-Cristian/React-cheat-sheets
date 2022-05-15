import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
//
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { uiActions } from "./store/ui-slice";
import Notification from './components/UI/Notification';
import {sendCartData, fetchCartData} from "./store/cart_actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showNotification = useSelector(state => state.ui.showNotification);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(()=>{
    dispatch(fetchCartData()); // get cart data
  }, [dispatch]);

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    
    if(cart.changed) dispatch(sendCartData(cart)); // we are waiting for the cart to change
  }, [cart, dispatch]);

  // WITHOUT ACTION THUNK:
  //
  // useEffect(() => {
  //   if(isInitial){
  //     isInitial = false;
  //     return;
  //   }
  //   const sendDataCart = async () => {
  //     dispatch(uiActions.showNotification({
  //       status: "pending",
  //       title: "Pending...",
  //       message: "Sending cart data is pending..."
  //     }))
  //     const response = await fetch("https://udemy-course-791bc-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart)
  //       });

  //     if (!response.ok) throw new Error("Sending cart data failed!"); // transforms wrong response into an error

  //     dispatch(uiActions.showNotification({
  //       status: "success",
  //       title: "Success!",
  //       message: "Cart data sent successfully!"
  //     }));
  //   }

  //   sendDataCart().catch(err => { // now ANY TYPE of error is handled,  not just bad response
  //     dispatch(uiActions.showNotification({
  //       status: "error",
  //       title: "Error",
  //       message: "Sending cart data failed!"
  //     }));
  //   })
  // }, [cart/*, dispatch */]);



  return (
    <>
      {showNotification && <Notification status={showNotification.status} title={showNotification.title} message={showNotification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
