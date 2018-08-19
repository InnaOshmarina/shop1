import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Pagination extends Component {

    static defaultProps = {
        page: 1
    };

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

        if (currentPage === this.props.page) {
            return;
        }

        this.props.paginateChange({offset: (currentPage - 1) * this.props.limit, page: currentPage })
    };

    render() {

        const { total, limit, paginateChange } = this.props;

        if(limit === undefined || total === undefined || paginateChange === undefined) {
            return null;
        }

        const allPages = Math.ceil(total/limit);

        const listPages = Pagination.getRangeArray(this.props.page, allPages);

        const prevButton = this.props.page === 1 ? null :
            ( <li className="page-item "   onClick={(event) => this.handlePaginationChange(event, this.props.page - 1)}>
                <a className="page-link" href="" tabIndex="-1">Prev</a>
            </li>
         );

        const nextButton = this.props.page === allPages ? null :(
            <li className="page-item " onClick={(event) => this.handlePaginationChange(event, this.props.page + 1)}>
                <a className="page-link" href="" tabIndex="-1">Next</a>
            </li>
        );

        let content = null;
        if (allPages > 1) {
            content = (
                <div>
                    <nav aria-label="...">
                        <ul className="pagination">
                            {prevButton}
                            {
                                listPages.map((item) => {
                                    return (
                                        <li key={item} onClick={(event) => this.handlePaginationChange(event, item)}
                                            className={classnames('page-item', {
                                                'active': this.props.page === item
                                            })}
                                        >
                                            <a className="page-link" href="">{item}</a>
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

        return content;
    }
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    paginateChange: PropTypes.func.isRequired
};

export default Pagination;