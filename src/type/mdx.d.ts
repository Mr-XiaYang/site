declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>
  }

  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {
  }
}

declare module '*.mdx' {
  import React from "react";
  import {TOCItem} from "parcel-transformer-mdx";

  export const toc: TOCItem[];
  export const contentTitle: string;
  export const frontMatter: object;
  const MDXComponent: React.ComponentType<any> & { isMDXComponent: true };

  export default MDXComponent;
}
