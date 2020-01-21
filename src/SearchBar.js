import React from 'react';
import './SearchBar.css';
import Logo from './yout.png'
import Lastelem from './last-elem.png'
class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);

    }

    render() {
        return (
            <div className="container">
                <div className="child1">
                    <img alt="youtube-logo" src={Logo} height="32px" ></img>
                </div>
                <form className="child2 ui icon input" onSubmit={this.onFormSubmit}>
                    <input  value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }); }} type="text" placeholder="Rechercher" />
                    <i className="search icon"></i>
                </form>
                <div className="child3">
                    <img alt="youtube-logo" src={Lastelem} height="42px" ></img>
                </div>
            </div>
        )
    }
}
export default SearchBar;