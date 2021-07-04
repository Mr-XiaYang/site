import React from "react";
import TextField from "@material-ui/core/TextField";

class Search extends React.PureComponent {
    render() {
        return (
            <TextField
                variant="outlined"
                margin="dense"
                placeholder="搜索..."
            />
        );
    }
}

export default Search;