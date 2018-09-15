import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CardItems from "../shared/CardItems";
import { Bar } from 'react-chartjs-2';

import '../../css/Dashboard.css';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getCountItems();

        this.props.getChartData();
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
        beginAtZeroTicks: true
    };

    render() {
        const {categoriesCount, productsCount, ordersCount, dataForChart} = this.props;

        const chartData = {
            labels: dataForChart.labels,
            datasets: [
                        {
                            label: 'Number of products in the category',
                            data: dataForChart.data,
                            backgroundColor: 'rgb(128, 193, 243)',
                            borderColor: 'rgb(35, 114, 243)',
                            borderWidth: 1
                        }
                      ]
        };

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <CardItems
                            color={`bg-info`}
                            icon={`fas fa-bars`}
                            data={categoriesCount}
                            text='categories'
                            path={'/categories'}
                            colorLink='rgb(23, 162, 184)'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <CardItems
                            color={`bg-warning`}
                            icon={`fas fa-sitemap`}
                            data={productsCount}
                            text='products'
                            path={'/products'}
                            colorLink='rgb(255, 193, 7)'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <CardItems
                            color={`bg-success`}
                            icon={`fas fa-shopping-cart`}
                            data={ordersCount}
                            text='orders'
                            path={'/orders'}
                            colorLink='rgb(40, 167, 69)'
                        />
                    </div>
                </div>
                <div className="row chart-number-items">
                    <Bar
                        data={chartData}
                        height={300}
                        width={700}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Number items',
                                fontSize: 25
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:this.props.beginAtZeroTicks
                                    }
                                }]
                            },
                            maintainAspectRatio: true
                        }}
                    />
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getCountItems: PropTypes.func.isRequired,
    getChartData: PropTypes.func.isRequired,
    categoriesCount: PropTypes.node.isRequired,
    productsCount: PropTypes.node.isRequired,
    ordersCount: PropTypes.node.isRequired,
    dataForChart: PropTypes.object.isRequired
};

export default Dashboard;
