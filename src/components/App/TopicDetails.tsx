import React from 'react';
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";

import data from '../../data';

interface Props extends RouteComponentProps<any> {}

interface State {
  item: { [key: string]: string };
}

class TopicDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      item: {}
    }

    this.getGroups = this.getGroups.bind(this);
  }

  componentDidMount() {
    this.getGroups();
  }

  getGroups() {
    const { pathname } = this.props.location;
    const listOfParams = pathname.split('/');
    const group = listOfParams[listOfParams.length -2];
    const topic = listOfParams[listOfParams.length -1];

    const item: {} = data.reduce((acc: {}, cur) => {
      if (cur.group.toLowerCase().replace(/ /g, '-') === group && cur.topic.toLowerCase().replace(/ /g, '-') === topic) {
        return acc = cur
      } else {
        return acc
      }
    }, {})

    this.setState({ item })
  }

  normalizeTitle(title: string) {
    return title && title.toUpperCase().replace(/-/g, ' ');
  }

  render() {
    const { group, topic, description } = this.state.item;

    return (
      <div className="groups">
        <h1>{this.normalizeTitle(group)} / {this.normalizeTitle(topic)}</h1>
        <div className='item'>
          <h1>{group}</h1>
          <h3>{topic}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(TopicDetails);
