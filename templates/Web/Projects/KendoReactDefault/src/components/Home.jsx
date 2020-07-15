import React from 'react';
import ComponentsIcon from './img/components.svg';
import StylesIcon from './img/styles.svg';
import BlogsIcon from './img/blogs.svg';
import TutorialsIcon from './img/tutorials.svg';
import Kendoka from './img/kendoka.svg';

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-12'>
                    <h1 className='welcome mb-0'>Welcome to KendoReact</h1>
                    <h2 className='sub-header mt-0'>This is a sample application built with KendoReact - a set of over 80 UI components built from the ground-up specifically for React.</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='get-started'>Get Started</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 text-right'>
                    <div className='kendoka-div'>
                        <img className='kendoka' src={Kendoka} alt='kendoka' />
                    </div>
                </div>
                <div className='col-6 components-list'>
                    <p>
                    <img src={ComponentsIcon} alt='components' />
                        <a href='https://www.telerik.com/kendo-react-ui/components/?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext'>Components & Documentation</a>
                    </p>
                    <p>
                        <img src={StylesIcon} alt='styles' />
                        <a href='https://www.telerik.com/kendo-react-ui/components/styling/?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext'>KendoReact Themes Overview</a>
                    </p>
                    <p>
                        <img src={BlogsIcon} alt='blogs' />
                        <a href='https://www.telerik.com/blogs/tag/react?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext'>Blog Posts</a>
                    </p>
                    <p>
                        <img src={TutorialsIcon} alt='tutorials' />
                        <a href='https://www.telerik.com/kendo-react-ui/react-hooks-guide/?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext'>Tutorials</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
