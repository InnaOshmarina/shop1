import * as React from 'react';

const defaultFilterAfterSorting = {
    page: 1,
    offset: 0
};

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

            this.setState({ currentFilter: {...this.state.currentFilter, sort, ...defaultFilterAfterSorting }}, () => {
                this.props.getData(this.state.currentFilter);
            });
        };

        handleFilterChange = (data) => {
            let newData;
            newData = data;

            this.setState({ currentFilter: {...this.state.currentFilter, ...newData}}, () => {
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