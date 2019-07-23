import React from 'react';
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";

interface Props extends RouteComponentProps<any> {
  key: number
  group: string
}

class Button extends React.Component<Props> {
  public myHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { textContent } = e.currentTarget;
    const group = textContent && textContent.toLowerCase().replace(/ /g, '-');
    const { pathname } = this.props.location;

    if (pathname === '/') {
      this.props.history.push(`/groups/${group}`);
    } else {
      const listOfPaths = pathname.split('/');
      const currentGroup = listOfPaths[listOfPaths.length - 1];
      this.props.history.push(`/groups/${currentGroup}/${group}`);
    }
  }

  public render () {
    const { group } = this.props;
    return (
      <div className="group" onClick={this. myHandler}>{group}</div>
    )
  }
}

export default withRouter(Button);
