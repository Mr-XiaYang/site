import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate"
import _ from "lodash";
import React from "react";


export const MDXComponents = {
  hr: () => (<Box my={2}><Divider/></Box>),
  thematicBreak: () => (<Divider component={Box} py={0.5}/>),
  h1: (props) => (<Typography variant='h1'>{props.children}</Typography>),
  h2: (props) => (<Typography variant='h2'>{props.children}</Typography>),
  h3: (props) => (<Typography variant='h3'>{props.children}</Typography>),
  h4: (props) => (<Typography variant='h4'>{props.children}</Typography>),
  h5: (props) => (<Typography variant='h5'>{props.children}</Typography>),
  h6: (props) => (<Typography variant='h6'>{props.children}</Typography>),
  p: (props) => typeof props.children === 'string' ? props.children.split(/\r?\n/).map((p) => (
    <Typography key={_.uniqueId('p_')} variant='body1'>{p}</Typography>
  )) : (
    <Typography variant='body1'>{props.children}</Typography>
  ),
  ul: (props) => {
    const children = _.isArray(props.children) ? props.children : [props.children];
    return (
      <List dense disablePadding>
        {children.map(({type, props}) => {
          return React.createElement(type, {
            ...props, key: _.uniqueId('ul_'), children: _.isArray(props.children) ?
              ([...(typeof props.children[0] === 'string' ? props.children[0].split(/\r\n/) : [props.children[0]]), ...props.children.slice(1)]) :
              ([...(typeof props.children === 'string' ? props.children.split(/\r\n/) : [props.children])])
          })
        })}
      </List>
    )
  },
  ol: (props) => {
    const children = _.isArray(props.children) ? props.children : [props.children];
    return (
      <List dense disablePadding component={'ol'}>
        {children.map(({type, props}, index) => {
          const key = _.uniqueId('ul_');
          return React.createElement(type, {
            ...props, key: key, index: index + 1, children: _.isArray(props.children) ?
              ([...props.children[0].split(/\r\n/), ...props.children.slice(1)]) :
              ([...props.children.split(/\r\n/)])
          })
        })}
      </List>
    )
  },
  li: (props) => (
    <ListItem disableGutters style={{padding: 0, alignItems: 'flex-start'}}>
      <ListItemIcon style={{minWidth: "initial"}}>
        {!props.index ? (
          <Box m={0.5}><StarRateIcon/></Box>
        ) : (
          <Typography component={Box} pr={0.5} minWidth={32} textAlign='end' variant='h6'>{props.index}.</Typography>
        )}
      </ListItemIcon>
      <ListItemText style={{padding: 0, margin: 0}} disableTypography primary={
        typeof props.children[0] === 'string' ?
          React.createElement(Typography, {variant: 'h6', children: props.children[0]}) :
          React.createElement(Typography, {variant: 'h6', children: props.children[0].props.children})
      } secondary={
        React.createElement(Box, {
          pl: 2, children: props.children.slice(1)
            .map((child) => typeof child === 'string' ? (MDXComponents.p({children: child})) : child)
        })
      }
      />
    </ListItem>
  ),
  blockquote: (props) => (
    <Box ml={0.75} pl={1} borderLeft={2} borderColor="primary.main">{props.children}</Box>
  )
}
