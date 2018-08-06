import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Pagination extends Component {

    state = {
        currentPage: 0,
        limit: 0,
        offset: 0,
        total: 0
    };

    componentDidMount() {
        this.setCurrentPage();
    }

    componentDidUpdate(prevProps){
        if (prevProps.limit !== this.props.limit) {
           this.setCurrentPage();
        }
    }

    setCurrentPage() {
        this.setState({currentPage: 1});
    }

    static getRangeStart(currentPage, pageRange) {
        let start  = currentPage - pageRange;

        return (start > 0) ? start : 1;
    }

    static getRangeEnd(currentPage, totalPages, pageRange) {
        let end  = currentPage + pageRange;

        return (end < totalPages) ? end : totalPages;
    }

    static getRangeArray(currentPage, totalPages, pageRange = 2) {
        const rangeStart = Pagination.getRangeStart(currentPage, pageRange);
        const rangeEnd = Pagination.getRangeEnd(currentPage, totalPages, pageRange);
        let answer = [];
        for(let i = rangeStart; i <= rangeEnd;i++) {
            answer.push(i);
        }

        return answer;
    }

    handlePaginationChange = (event, currentPage) => {
        event.preventDefault();

        if (currentPage === this.state.currentPage) {
            return;
        }

        this.setState({currentPage: currentPage});
        this.props.paginateChange({offset: (currentPage - 1) * this.props.limit})
    };

    render() {

        const { total, limit } = this.props;
        const allPages = Math.ceil(total/limit);

        const listPages = Pagination.getRangeArray(this.state.currentPage, allPages);

        const prevButton = this.state.currentPage === 1 ? null :
            ( <li className="page-item "   onClick={(event) => this.handlePaginationChange(event, this.state.currentPage - 1)}>
                <a className="page-link" href="#" tabIndex="-1">Prev</a>
            </li>
         );

        const nextButton = this.state.currentPage === allPages ? null :(
            <li className="page-item " onClick={(event) => this.handlePaginationChange(event, this.state.currentPage + 1)}>
                <a className="page-link" href="#" tabIndex="-1">Next</a>
            </li>
        );


        return (
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        {prevButton}
                        {
                            listPages.map((item) => {
                                return (
                                    <li key={item} onClick={(event) => this.handlePaginationChange(event, item)}
                                        className={classnames('page-item', {
                                            'active': this.state.currentPage === item
                                        })}
                                    >
                                        <a className="page-link" href="#">{item}</a>
                                    </li>
                                );
                            })
                        }
                        {nextButton}
                    </ul>
                </nav>
            </div>
        );
    }
}

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    paginateChange: PropTypes.func.isRequired
};

export default Pagination;