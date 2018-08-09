import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../css/Search.css';


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
            <div>
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-sep">
                        <input
                            className="mr-sm-2 form-control"
                            type="text"
                            placeholder="Введите название"
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                        />

                        <button className="search btn-secondary" type="submit" id="search">
                            <i className="fas fa-search"/>
                        </button>
                    </div>
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
