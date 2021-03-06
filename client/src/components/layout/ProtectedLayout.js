import React, {Component} from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Dashboard from "../../containers/dashboard/Dashboard";
import CategoriesList from '../../containers/category/CategoryList';
import ProductsList from '../../containers/product/ProductList';
import OrdersList from '../../containers/order/OrderList';
import CategoryAdding from '../category/CategoryAdding';
import CategoryDetails from '../category/CategoryDetails';
import ProductAdding from "../product/ProductAdding";
import ProductDetails from "../product/ProductDetails";
import OrderDetails from "../order/OrderDetails";
import '../../css/ProtectedLayout.css';

const style =
    {
        backgroundColor: 'rgb(75, 82, 88)',
        borderRadius: '0.625rem',
        border: 'none',
        color: '#fff'
    };

const navigations = [
    {
        title: 'Dashboard',
        to: '/dashboard'
    },
    {
        title: 'Product categories',
        to: '/categories'
    },
    {
        title: 'Products',
        to: '/products'
    },
    {
        title: 'Orders',
        to: '/orders'
    }
];

class ProtectedLayout extends Component {

    render() {

        return (
            <Router>
                <div className="dashboard">
                    <div className="container-fluid content">
                        <div className="row d-flex justify-content-around">
                            <div className="col-md-2">
                                <div className="list-group protected-layout">
                                    {
                                        navigations.map((navigation, index) => (
                                            <NavLink
                                                key={index}
                                                to={navigation.to}
                                                activeStyle={style}
                                                className="list-group-item list-group-item-action">
                                                {navigation.title}
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-9">
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route exact path="/categories" component={CategoriesList} />
                                <Route exact path="/categories/add" component={CategoryAdding} />
                                <Route exact path="/categories/edit/:id" component={CategoryAdding} />
                                <Route exact path="/categories/detail/:id" component={CategoryDetails} />
                                <Route exact path="/products" component={ProductsList} />
                                <Route exact path="/products/add" component={ProductAdding} />
                                <Route exact path="/products/edit/:id" component={ProductAdding} />
                                <Route exact path="/products/detail/:id" component={ProductDetails} />
                                <Route exact path="/orders" component={OrdersList} />
                                <Route exact path="/orders/detail/:id" component={OrderDetails} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ProtectedLayout;
