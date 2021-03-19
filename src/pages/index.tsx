import React from 'react';
import Box from '@material-ui/core/Box';
import Head from 'next/head';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>夏阳BLOG</title>
      </Head>
      <Box>
        <Button variant="contained" color="primary">
          你好，世界
        </Button>
      </Box>
    </React.Fragment>
  )
}

Home.Layout = 'test'

export default Home;