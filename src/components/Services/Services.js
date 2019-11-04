import React from 'react'
import './Services.css'


const Services = () => {
    return (
        <section className="services__container">
            <h3 className="services-header">
                    My Services <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">04.</span>
                </h3>
            <div className="service">
                <i className="fas fa-pencil-alt"></i>
                    <div>
                        <span className="dots dots-mod">.................................</span>
                        <i className="fas fa-circle"></i> 
                        <span className="service-type">Creative Design</span>
                    </div>
                    <p>
                    I will create modern, unique designs that best suit your business. In addition to that, It will be my pleasure to bring the design to life.
                    </p>
                </div>

            <div className="service">
                <i className="fas fa-code"></i>
                      <div>
                        <span className="dots dots-mod">.................................</span>
                        <i className="fas fa-circle"></i> 
                        <span className="service-type">Scalable code</span>
                    </div>
                    <p>
                    I will write code that is scalable, which means if a need to expand your project arises, it will be easy to implement changes.
                    </p>
                </div>

            <div className="service">
                <i className="fas fa-laptop"></i>
                     <div>
                        <span className="dots dots-mod">...................................</span>
                        <i className="fas fa-circle"></i> 
                        <span className="service-type">Development</span>
                    </div>
                    <p>
                    I will develop any project you have in mind, with the latest technologies
                    available. 
                    </p>
                </div>

            <div className="service">
                <i className="fas fa-ad"></i>
                     <div>
                        <span className="dots dots-mod">...................................</span>
                        <i className="fas fa-circle"></i> 
                        <span className="service-type">Advertisement</span>
                    </div>
                    <p>
                    I will run ads for your business on both facebook and Instagram, whether be it to bring traffic or conversions to your website.
                    </p>
                </div>

            <div className="service">
                <i className="fas fa-cloud-upload-alt"></i>
                    <div>
                        <span className="dots dots-mod">.................................</span>
                        <i className="fas fa-circle"></i> 
                        <span className="service-type">Content Upload</span>
                    </div>
                    <p>
                    I will upload content on your website, be it products or any information you'd like, for instance: text, images, videos, and etcetera.
                    </p>
            </div>

            <div className="service">
                <i className="fas fa-tools"></i>
                    <div>
                        <span className="dots dots-mod">...................................</span>
                        <i className="fas fa-circle"></i> 
                        <span className="service-type">Maintenance</span>
                    </div>
                    <p>
                    I will maintain your website for free for a whole month, then after you'll only pay a reasonable low monthly fee.
                    </p>
                </div>
        </section>
    )
}

export default Services;