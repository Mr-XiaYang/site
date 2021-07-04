import React from "react";

function propsWrapper<Props extends object = {}>(wrappedComponent: React.ComponentType<Props>): React.ComponentType<Props>;
function propsWrapper<Props extends object = {}, ExtendsProps extends object = {}>(wrappedComponent: React.ComponentType<Props>): React.ComponentType<Omit<Props, keyof ExtendsProps>>;
function propsWrapper<Props extends object = {}, ExtendsProps extends object = {}, DefaultProps extends object = {}>(wrappedComponent: React.ComponentType<Props>): React.ComponentType<Omit<Props, keyof ExtendsProps> & Partial<DefaultProps>>;
function propsWrapper(wrappedComponent: React.ComponentType) {
    return wrappedComponent;
}

export default propsWrapper;