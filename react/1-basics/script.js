// HOC
function withLogin(Component) {
    return () => {
        function login() {
            console.log('login');
        }
        return <Component login={login} />;
    };
}

function Test(props) {
    return <button onClick={() => props.login()}>Login</button>;
}

const EnhancedTest = withLogin(Test);
function App() {
    const [count, setCount] = React.useState(0);
    const [input, setInput] = React.useState('');
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
    function handleChange(e) {
        const { name, value } = e.target;
        console.log('🚀 ~ handleChange ~ value:', value);
        console.log('🚀 ~ handleChange ~ name:', name);
        setInput(value);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onClickHandler}>Increment</button>
            <EnhancedTest />
            <input
                name="test"
                value={input}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
