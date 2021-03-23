import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {runInAction} from "mobx";
import {inject, observer} from "mobx-react";
import Head from 'next/head';
import Link from "next/link";
import React from 'react';
import {ThemeStore} from "../stores";

interface Props {
}

class About extends React.PureComponent<Props> {

  render() {

    return (
      <React.Fragment>
        <Head>
          <title>夏阳BLOG</title>
        </Head>
        <Box>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
          <Button variant="contained" color="secondary">
            你好，世界
          </Button>
          <Button variant="contained" color="primary">
            你好，世界
          </Button>
        </Box>
      </React.Fragment>
    );
  }
}

export default About;
