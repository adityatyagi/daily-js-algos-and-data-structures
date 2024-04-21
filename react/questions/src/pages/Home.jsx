import { useCallback, useMemo } from 'react';
import { useReducer, useState } from 'react';

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_PRODUCT': {
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        }
        default:
            break;
    }
};

const initialCart = {
    cart: [
        {
            id: 0,
            name: 'Product 0',
        },
    ],
};
const Home = () => {
    const [state, dispatch] = useReducer(
        shoppingReducer,
        initialCart
    );

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);
    function counter1Change() {
        console.log('🚀 ~ counter1Change ~ counter1Change:');
        // expensive calculation
        setCounter1(counter1 + 1);
    }

    function counter2Change() {
        console.log('🚀 ~ counter2Change ~ counter2Change:');
        // expensive calculation
        setCounter2(counter2 + 1);
    }

    // function squaredValue() {
    //     console.log('🚀 ~ squaredValue ~ squaredValue:');
    //     return counter1 * counter1;
    // }

    // const memoSquaredValue = useMemo(() => {
    //     console.log('inside memoized squared value');
    //     console.log('value of counter 2', counter2);
    //     return counter1 * counter1;
    // }, [counter1]);

    const callbackSquaredFunction = useCallback(() => {
        console.log('inside callback squared value');
        console.log('value of counter 2', counter2);
        return counter1 * counter1;
    }, []);

    return (
        <h1>
            <ul>
                {state.cart.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                            id: 1,
                            name: 'Product 1',
                        },
                    })
                }
            >
                Add Product 1
            </button>
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                            id: 2,
                            name: 'Product 2',
                        },
                    })
                }
            >
                Add Product 2
            </button>
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: 'REMOVE_PRODUCT',
                        payload: {
                            id: 2,
                        },
                    })
                }
            >
                Remove Product 2
            </button>
            {/* {squaredValue()} */}
            {/* {memoSquaredValue} */}
            {callbackSquaredFunction()}
            <button type="button" onClick={counter1Change}>
                Increment Counter 1
            </button>
            <button type="button" onClick={counter2Change}>
                Increment Counter 2
            </button>
        </h1>
    );
};

export default Home;
