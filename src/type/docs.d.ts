import {TOCItem} from "parcel-transformer-mdx";
import React from "react";

type MDXDocument = {
  toc: TOCItem[];
  contentTitle: string;
  frontMatter: object;
  default: React.ComponentType<any> & { isMDXComponent: true };
}
