import React from 'react';
import LinkedinIcon from './img/linkedin.svg';
import TwitterIcon from './img/twitter.svg';
import FacebookIcon from './img/facebook.svg';
import YoutubeIcon from './img/youtube.svg';

const Footer = (props) => {
    return (
        <div className="container-fluid">
            <div className='d-flex'>
                 <div>
                <div className='mb-2 links'>
                    <a href="https://www.telerik.com/purchase/license-agreement/progress-kendoreact?utm_medium=product&utm_source=vs&utm_campaign=kendo-ui-react-branding-vs-ext">License Agreement</a>
                </div>
                <div className='copyright'>
                    Copyright © 2019 Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.
                </div>
                </div>
                <div className='d-flex ml-auto'>
                    <div className="social">
                    <a href="https://www.facebook.com/KendoUI/"><img src={FacebookIcon} alt="facebook" /></a>
                    <a href="https://twitter.com/kendoreact"><img src={TwitterIcon} alt="twitter" /></a>
                    <a href="https://www.youtube.com/results?search_query=kendoreact"><img src={YoutubeIcon} alt="youtube" /></a>
                    <a href="https://www.linkedin.com/showcase/telerik/"><img src={LinkedinIcon} alt="linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;