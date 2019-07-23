export interface Groups {
  groups: string[]
}

export interface GroupProps {
  key: number,
  group: string,
  handleClick?: React.MouseEvent<HTMLElement>
}