import BaseStore from "./baseStore";
import type RootStore from "./index";
import {action, makeObservable, observable, ObservableMap} from "mobx";
import React from "react";
import {TOCItem} from "../../../npm_packages/packages/parcel-transformer-mdx";

type Document = {
    default: React.ComponentType<any> & { isMDXComponent: true }
    toc: TOCItem[];
    contentTitle: string;
    frontMatter: object;
}

class DocsStore implements BaseStore {
    @observable.ref
    readonly rootStore: RootStore;

    @observable.shallow
    documents: ObservableMap = new ObservableMap<string, () => Promise<Document>>();

    constructor(rootStore: RootStore) {
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @action
    addDocuments(documents: Record<string, () => Promise<Document>>) {
        this.documents.merge(documents);
    }
}

export default DocsStore;