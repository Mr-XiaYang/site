import React from 'react';
import {Switch, useRouteMatch} from "react-router";
import {MDXDocument} from "../type/docs";

type Props = {
  documents: Record<string, () => Promise<MDXDocument>>
} & InjectProps;
type InjectProps = {}

type State = {
  documents: Record<string, () => Promise<MDXDocument>>
}

export const DocumentWrapper: React.FunctionComponent<Props> = function (props) {
  const routeMatch = useRouteMatch();

  return (
    <Switch>

    </Switch>
  );
}
