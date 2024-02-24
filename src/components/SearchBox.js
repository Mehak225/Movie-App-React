import React from "react";

const SearchBox =(props) =>{
    return(
        <div className="col col-sm-6">
            <input value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)} className="form-control" placeholder="SEARCH MOVIES.."></input>
        </div>
    )
}

export default SearchBox;