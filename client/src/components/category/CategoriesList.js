// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getCategories } from '../../actions/categoryActions';
// import CategoryItem from './CategoryItem';
// import Spinner from '../shared/Spinner';
//
// class CategoriesList extends Component {
//     componentDidMount() {
//         this.props.getCategories();
//     }
//
//     render() {
//         const { categories } = this.props.category;
//
//         let categoryItems;
//
//         if(categories === null ) {
//             categoryItems = <Spinner />
//         } else {
//             if (categories.length > 0) {
//                 categoryItems = categories.map(category => (
//                     <CategoryItem key={category._id} category={category} />
//                 ));
//             } else {
//                 categoryItems = <h4>No categories found...</h4>;
//             }
//         }
//         return (
//             <div>
//                 <Link to="/category-adding">
//                     <button type="button" className="btn btn-success">Add Category</button>
//                 </Link>
//                 {categoryItems}
//             </div>
//         );
//     }
// }
//
// CategoriesList.propTypes = {
//     getCategories: PropTypes.func.isRequired,
//     category: PropTypes.object.isRequired
// };
//
// const mapStateToProps = state => ({
//     category: state.category
// });
//
// export default connect(mapStateToProps, { getCategories })(CategoriesList);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../../actions/categoryActions';
import DataTable from '../shared/DataTable';
import { TEXTFORMAT } from "../../constans/GlobalConstans";

class CategoriesList extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;
        console.log(this.props);

        // const headers = ['title', 'description', 'date' ];
        const headers = [
            {
                name: 'title',
                options: {
                    headerName: 'Name of category',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'description',
                options: {
                    headerName: 'Brief description',
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

        console.log(headers);

        return (
            <div>
                <Link to="/category-adding">
                    <button type="button" className="btn btn-success">Add Category</button>
                </Link>
                <DataTable
                    data={categories}
                    headers={headers}
                />
            </div>
        );
    }
}

CategoriesList.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    categories: state.category.categories
});

export default connect(mapStateToProps, { getCategories })(CategoriesList);
