import React, {Component} from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dashboard from "../dashboard/Dashboard";
import CategoriesList from '../category/CategoriesList';
import ProductsList from '../product/ProductsList';
import OrdersList from '../order/OrdersList';
import CategoryAdding from '../category/CategoryAdding';
import CategoryDetails from '../category/CategoryDetails';
import ProductAdding from "../product/ProductAdding";
import '../../css/ProtectedLayout.css';


class ProtectedLayout extends Component {
    render() {
        return (
            <Router>
                <div className="dashboard">
                    <div className="container-fluid content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="list-group">
                                    <Link className="list-group-item list-group-item-action" to="/dashboard">Dashboard</Link>
                                    <Link className="list-group-item list-group-item-action" to="/categories">Product categories</Link>
                                    <Link className="list-group-item list-group-item-action" to="/products">Products</Link>
                                    <Link className="list-group-item list-group-item-action" to="/checkout">Orders</Link>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route exact path="/categories" component={CategoriesList} />
                                <Route exact path="/category-adding" component={CategoryAdding} />
                                <Route exact path="/categories/edit/:id" component={CategoryAdding} />
                                <Route exact path="/categories/detail/:id" component={CategoryDetails} />
                                <Route exact path="/products" component={ProductsList} />
                                <Route exact path="/product-adding" component={ProductAdding} />
                                <Route exact path="/products/edit/:id" component={ProductAdding} />
                                <Route exact path="/checkout" component={OrdersList} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ProtectedLayout;
