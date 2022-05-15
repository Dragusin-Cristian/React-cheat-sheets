import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// ACTION CREATOR THUNKS

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://udemy-course-791bc-default-rtdb.europe-west1.firebasedatabase.app/cart.json");
            if (!response.ok) throw new Error("Failed to fetch the data!");

            const data = await response.json();

            return data;
        }

        try {
            const result = await fetchData();
            dispatch(cartActions.replaceCart({
                items: result.items || [], // don't get an error because trying to get null 
                totalQuantity: result.totalQuantity
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Sending cart data failed!"
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Pending...",
            message: "Sending cart data is pending..."
        }))

        const sendRequest = async () => {
            const response = await fetch("https://udemy-course-791bc-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items || [], // don't get an error because trying to get null 
                        totalQuantity: cart.totalQuantity
                    })
                });

            if (!response.ok) throw new Error("Sending cart data failed!"); // transforms wrong response into an error
        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Cart data sent successfully!"
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Sending cart data failed!"
            }));
        }


    }
}