import { useRouteError } from 'react-router-dom';

const ErrorComponent = () => {
    const error = useRouteError();
    console.log('🚀 ~ ErrorComponent ~ error:', error);
    return <div>Oops! Something went wrong!</div>;
};

export default ErrorComponent;
