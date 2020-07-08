import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const[location, setLocation] = useState(props.location || '');

    function Submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : "is-medium";
    return(
        <form onSubmit={Submit}>
            <div className="field has-addons">
                <p className="control">
                     <button className={`button is-static ${sizeClass}`}>Search</button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} 
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="burgers, barbers, spas, handymen"/>
                </p>
                <div className="control">
                     <div className={`button is-static ${sizeClass}`}>NEAR</div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass}`} 
                    onChange={(e) => setLocation(e.target.value)}
                    type="text" 
                    placeholder="Your Where"/>
                </p>
                <button className={`button ${sizeClass} ${styles['search-button']}`} onClick={Submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}>
                        <i className="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </form>
    );
}