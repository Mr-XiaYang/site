import Box from "@material-ui/core/Box";
import React from "react";
import {inject, observer} from "mobx-react";
import AppStore from "../store/appStore";
import propsWrapper from "../hoc/propsWrapper";

type Props = {} & InjectProps & DefaultProps;

type InjectProps = {
  appStore: AppStore
}

type DefaultProps = {}

@inject('appStore') @observer
class Background extends React.PureComponent<Props> {

  render() {
    return (
      <Box bgcolor={'#E2e2e2'} height="100%" width="100%">
        {this.props.children}
      </Box>
    );
  }
}

export default propsWrapper<Props, InjectProps, DefaultProps>(Background);
