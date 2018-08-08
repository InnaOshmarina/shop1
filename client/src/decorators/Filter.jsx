import * as React from 'react';

export default function Filter(WrappedComponent, defaultFilter = {}) {

    return class extends React.PureComponent {

        state = {
            currentFilter: {
                sort: { date: -1 },
                page: 1,
            }
        };

        componentDidMount() {
            this.setState({
                currentFilter: {
                    ...this.state.currentFilter,
                    ...defaultFilter
                }
            }, () => {
                this.props.getData(this.state.currentFilter);
            });
        }

        handleChangeSort = (headerItem) => {
            let sort = {
                [headerItem]: -1
            };

            if (this.state.currentFilter.sort[headerItem]) {
                sort[headerItem] = this.state.currentFilter.sort[headerItem] * -1;
            }

            this.setState({ currentFilter: {...this.currentFilter, sort, page: 1 }}, () => {
                this.props.getData(this.state.currentFilter);
            });

        };

        handleFilterChange = (data) => {
            let newData = data;

            this.setState({...this.state, currentFilter: {...this.state.currentFilter, ...newData}}, () => {
                this.props.getData(this.state.currentFilter);
            });
        };

        render() {

            return (
                <div>
                    <WrappedComponent
                        {...this.props}
                        filterChange={this.handleFilterChange}
                        handleChangeSort={this.handleChangeSort}
                        handleFilterChange={this.handleFilterChange}
                        currentFilter={this.state.currentFilter}
                    />
                </div>
            );
        }

    };
}