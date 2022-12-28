import React from 'react';
import { Link as MuiLink } from 'react-router-dom';
import './style.css';

export function Link(props) {
    return <MuiLink className="link" {...props} />;
}
