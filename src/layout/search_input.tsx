import TextField from "@material-ui/core/TextField";
import React from "react";

export type SearchInputProps = {};

export const SearchInput = (
  class _SearchInput extends React.PureComponent {
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
) as unknown as React.ComponentType<SearchInputProps>;
