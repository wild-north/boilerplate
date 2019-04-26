import React from 'react';
import { footer } from './style.module.css';
import classnames from 'classnames';

export const Footer = () => (
    <footer className={ classnames('footer', footer) }>
        <span>Footer</span>
    </footer>
);