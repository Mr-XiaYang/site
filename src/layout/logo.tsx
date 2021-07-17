import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export type LogoProps = {};

export const Logo = (
  class _Logo extends React.PureComponent<LogoProps> {
    render() {
      return (
        <Box>
          <Typography variant="h5">夏阳</Typography>
        </Box>
      );
    }
  }
) as unknown as React.ComponentType<LogoProps>;
