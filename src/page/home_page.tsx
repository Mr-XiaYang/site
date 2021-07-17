import {inject, observer} from "mobx-react";
import React from "react";
import {AppBar} from "../layout/app_bar";
import {Background} from "../layout/background";
import {AppStore} from "../store/app_store";

type InlineProps = {} & InjectProps;

type InjectProps = {
  appStore: AppStore
}
export type HomePageProps = PropsWrapper<InlineProps, InjectProps>;

export const HomePage = inject('appStore')(observer(
  class _HomePage extends React.PureComponent<HomePageProps> {

    constructor(props: InlineProps) {
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
)) as unknown as React.ComponentType<HomePageProps>;

