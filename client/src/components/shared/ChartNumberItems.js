import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

class ChartNumberItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        };
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    };


    render() {
        return (
            <div className="mx-auto col-md-8">
                <Bar
                    data={this.state.chartData}
                    height={500}
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
                        }
                    }}
                />
            </div>
        );
    }
}

// NumberProducts.propTypes = {
//     products: PropTypes.object.isRequired
// };


export default ChartNumberItems;
