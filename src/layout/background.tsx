import Box from "@material-ui/core/Box";
import {inject, observer} from "mobx-react";
import React from "react";
import {AppStore} from "../store";

type InlineProps = {
  children: React.ReactNode
} & InjectProps & DefaultProps;

type InjectProps = {
  appStore: AppStore
};

type DefaultProps = {};

export type BackgroundProps = PropsWrapper<InlineProps, InjectProps, DefaultProps>;

export const Background = inject('appStore')(observer(
  class _Background extends React.PureComponent<InlineProps> {
    render() {
      return (
        <Box bgcolor={'#E2e2e2'} height="100%" width="100%">
          {this.props.children}
        </Box>
      );
    }
  }
)) as unknown as React.ComponentType<BackgroundProps>;


