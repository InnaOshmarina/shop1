import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../css/Search.css';
import NavLink from "react-router-dom/es/NavLink";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        const categoryData = {
            search: this.state.search
        };

        this.props.handleFilterChange(categoryData);

    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        let content;
        content = (
            <div className="search">
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <i className="fas fa-search"/>
                    <input
                        className="mx-2 form-control"
                        type="text"
                        placeholder="Введите название"
                        name="search"
                        value={this.state.search}
                        onChange={this.onChange}
                    />

                    {/*<NavLink>*/}
                        <button className="search btn btn-success" type="submit" id="search">
                        Search
                    </button>
                    {/*</NavLink>*/}
                </form>
            </div>
        );

        return content;
    }
}

Search.propTypes = {
    handleFilterChange: PropTypes.func.isRequired
};

export default Search;
