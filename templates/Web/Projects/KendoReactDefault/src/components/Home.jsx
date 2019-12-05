import React from 'react';

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-12'>
                    <h1 className='welcome mb-0'>Welcome to KendoReact</h1>
                    <h2 className='sub-header mt-0'>Focus on the core of your application and spend less time sweating over the UI</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='get-started'>Get Started</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-4 text-right'>
                    <div>
                        <img className='kendoka' src='./img/kendoka.png' alt='kendoka' />
                    </div>
                </div>
                <div className='col-4 components-list'>
                    <p>
                        <img src='./img/components.png' alt='components' />
                        <a href='https://www.telerik.com/kendo-react-ui/components/'>Components</a>
                    </p>
                    <p>
                        <img src='./img/styles.png' alt='styles' />
                        <a href='https://www.telerik.com/kendo-react-ui/components/styling/'>KendoReact Themes Overview</a>
                    </p>
                    <p>
                        <img src='./img/blogs.png' alt='blogs' />
                        <a href='https://www.telerik.com/blogs/tag/react'>Blog Posts</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;