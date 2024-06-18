const withStyles = (Element) => {
    return function HOCComponent(props) {
        const cardStyle = {
            backgroundColor: 'red',
        };
        return <Element style={cardStyle} {...props} />;
    };
};

export default withStyles;
