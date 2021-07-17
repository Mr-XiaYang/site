type PropsWrapper<Props extends object = {}, ExtendsProps extends object = {}, DefaultProps extends object = {}> =
  Omit<Props, keyof ExtendsProps | keyof DefaultProps>
  & Partial<DefaultProps>;
