import React from 'react'

function SearchBar() {
    return (
        <div className="container">
            <form className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar