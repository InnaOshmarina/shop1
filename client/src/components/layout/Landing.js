import React, {Component} from 'react';

class Landing extends Component {

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Webstore "Shop1"
                                </h1>
                                <p className="lead">
                                    {' '}
                                    There will be content for the main page
                                </p>
                                <hr />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
