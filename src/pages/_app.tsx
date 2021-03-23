import {green, purple} from "@material-ui/core/colors";
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Provider as MobxProvider, Observer} from 'mobx-react'
import App, {AppContext, AppInitialProps, AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import initializeStore, {RootStore} from "../stores";
import {RootStoreInitialData} from "../stores";

type MyAppProps = AppProps & {
  initialMobxState: Partial<RootStoreInitialData>
}

type MyAppContext = AppContext & {
  ctx: {
    mobxStore: RootStore
  }
}

class MyAPP extends App<MyAppProps> {
  static async getInitialProps(appContext: MyAppContext): Promise<Partial<MyAppProps> & AppInitialProps> {
    const appProps = await this.origGetInitialProps(appContext)
    return {
      ...appProps,
      initialMobxState: {
        themeStore: {
          options: {
            palette: {
              primary: {
                main: purple[500],
              },
              secondary: {
                main: green[500],
              },
            }
          }
        }
      }
    }
  }

  private readonly mobxStore: RootStore;

  constructor(props: MyAppProps) {
    super(props);
    this.mobxStore = initializeStore(props.initialMobxState);
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const Component = this.props.Component;
    const pageProps = this.props.pageProps;
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>
        <MobxProvider {...this.mobxStore}>
          <Observer render={() => (
            <ThemeProvider theme={this.mobxStore.themeStore.muiTheme.get()}>
              <CssBaseline/>
              <Component {...pageProps} />
            </ThemeProvider>
          )}/>
        </MobxProvider>
      </React.Fragment>
    )
  }
}

export default MyAPP
