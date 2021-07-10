import {inject, observer} from "mobx-react";
import React from "react";
import propsWrapper from "../hoc/propsWrapper";
import AppBar from "../layout/appBar";
import Background from "../layout/background";
import AppStore from "../store/appStore";

type Props = {} & InjectProps;

type InjectProps = {
  appStore: AppStore
}

@inject('appStore') @observer
class HomePage extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Background>
        <AppBar/>

      </Background>
    );
  }
}

export default propsWrapper<Props, InjectProps>(HomePage);
