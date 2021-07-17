import {action, observable, ObservableMap} from "mobx";
import React from "react";
import {TOCItem} from "../../../npm_packages/packages/parcel-transformer-mdx";
import {BaseStore} from "./base_store";

type Document = {
  default: React.ComponentType<any> & { isMDXComponent: true }
  toc: TOCItem[];
  contentTitle: string;
  frontMatter: object;
}

export class DocsStore extends BaseStore {
  @observable.shallow
  documents: ObservableMap = new ObservableMap<string, () => Promise<Document>>();

  protected initialize() {
  }

  @action
  addDocuments(documents: Record<string, () => Promise<Document>>) {
    this.documents.merge(documents);
  }
}

