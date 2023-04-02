import React, { Component } from 'react';
import InputField from '../components/inputField';

function Home(){  
    return ( 
        <div className = "App">
            <header className = "App-header">
                <div> 
                    <button> Login </button>
                    <button> Logout </button>
                </div>
                The Web Testament
                <div>
                    <InputField
                    id ="page-selector-home" />
                </div>
            </header>
        </div>
    );
    
}

export default Home;