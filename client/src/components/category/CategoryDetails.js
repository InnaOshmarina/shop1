import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategory } from '../../store/actions/categoryActions';
import {TEXTFORMAT} from "../../constans/GlobalConstans";
import DataTableDetails from "../shared/DataTableDetails";

class CategoryDetails extends Component {

    componentDidMount() {
        this.props.getCategory(this.props.match.params.id);
    }
    render() {
        const { category } = this.props;

        const pageHeader = 'product category';

        const headers = [
            {
                name: 'title',
                options: {
                    headerName: 'Name',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'description',
                options: {
                    headerName: 'Description',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'date',
                options: {
                    headerName: 'Date of adding',
                    type: TEXTFORMAT.date
                }
            }
        ];

        return (
            <div className="mt-4">
                <DataTableDetails
                    pageHeader={pageHeader}
                    headers={headers}
                    currentItem={category}
                />
            </div>
        );
    }
}

CategoryDetails.propTypes = {
    category: PropTypes.object.isRequired,
    getCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    category: state.category.category,
    errors: state.errors
});


export default connect(mapStateToProps, { getCategory })(CategoryDetails);

