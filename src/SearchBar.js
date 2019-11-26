import React from 'react';
import './SearchBar.css';
import Logo from './youtube.png'
class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);

    }

    render() {
        return (
            <div className="container ui search">
                <div className="child1">
                    <img alt="youtube-logo" src={Logo} width="70px" ></img>
                </div>
                <form className="child2 ui icon input" onSubmit={this.onFormSubmit}>
                    <input className="prompt" value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }); }} type="text" placeholder="Search on Youtube..." />
                    <i className="search icon"></i>
                </form>
            </div>
        )
    }
}
export default SearchBar;