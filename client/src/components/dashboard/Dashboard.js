import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardItems from "../shared/CardItems";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getCountItems()
    }

    render() {
        const {categoriesCount, productsCount, ordersCount} = this.props;

console.log(categoriesCount);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <CardItems
                            color={`bg-info`}
                            icon={`fas fa-bars`}
                            data={categoriesCount}
                            text='categories'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <CardItems
                            color={`bg-warning`}
                            icon={`fas fa-sitemap`}
                            data={productsCount}
                            text='products'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <CardItems
                            color={`bg-success`}
                            icon={`fas fa-shopping-cart`}
                            data={ordersCount}
                            text='orders'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getCountItems: PropTypes.func.isRequired,
    categoriesCount: PropTypes.node.isRequired,
    productsCount: PropTypes.node.isRequired,
    ordersCount: PropTypes.node.isRequired
};

export default Dashboard;
