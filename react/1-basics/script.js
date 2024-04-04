function App() {
    const [count, setCount] = React.useState(0);
    const onClickHandler = () => {
        setCount(count + 1);
        console.log('clicked');
    };
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('p', null, 'Count : ' + count),
    //     React.createElement(
    //         'button',
    //         { onClick: onClickHandler },
    //         'Click'
    //     )
    // );

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onClickHandler}>Increment</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
