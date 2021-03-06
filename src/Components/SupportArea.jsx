import React from 'react'

const SupportArea = () => {
    return (
        <div className="item content">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <i className="fa fa-microphone infoareaicon"></i>
                        <div className="infoareawrap">
                            <h1 className="text-center subtitle">General Questions</h1>
                            <p>
                                Want to buy a theme but not sure if it's got all the features you need? Trouble completing the payment? Or just want to say hi? Send us your message and we will answer as soon as possible!
					                </p>
                            <p className="text-center">
                                <a href="#">- Get in Touch -</a>
                            </p>
                        </div>
                    </div>
                    {/* <!-- /.col-md-4 col --> */}
                    <div className="col-md-4">
                        <i className="fa fa-comments infoareaicon"></i>
                        <div className="infoareawrap">
                            <h1 className="text-center subtitle">Theme Support</h1>
                            <p>
                                Theme support issues prevent the theme from working as advertised in the demo. This is a free and guaranteed service offered through our support forum which is found in each theme.
					            </p>
                            <p className="text-center">
                                <a href="#">- Select Theme -</a>
                            </p>
                        </div>
                    </div>
                    {/* <!-- /.col-md-4 col --> */}
                    <div className="col-md-4">
                        <i className="fa fa-bullhorn infoareaicon"></i>
                        <div className="infoareawrap">
                            <h1 className="text-center subtitle">Hire Us</h1>
                            <p>
                                If you wish to change an element to look or function differently than shown in the demo, we will be glad to assist you. This is a paid service due to theme support requests solved with priority.
					            </p>
                            <p className="text-center">
                                <a href="#">- Get in Touch -</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportArea
