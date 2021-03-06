import "../../styles/notfound.modules.css";
import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div class="notfound">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist or an other error occured./ Go to <Link to="/">Home Page.</Link></p>
        </div>
    );
};

export default NotFound;