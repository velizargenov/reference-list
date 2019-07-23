import React from 'react';
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";

import data from '../../data';
import Button from '../Button/Button';

interface Props extends RouteComponentProps<any> {}

interface State {
  topics: string[],
  selectedGroup: string
}

interface Data {
  group: string,
  topic: string,
  description: string
}

interface Placeholder {
  topics: Data[]
}

class TopicsList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      topics: [],
      selectedGroup: ''
    }

    this.getTopics = this.getTopics.bind(this);
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics() {
    const { pathname } = this.props.location;
    const listOfParams = pathname.split('/');
    const group = listOfParams[listOfParams.length -1];
    this.setState({
      selectedGroup: group
    })
    const topics: string[] = data.reduce((acc: string[], cur) => {
      return cur && cur.group && cur.group.toLowerCase().replace(/ /g, '-') === group ? [...acc, cur.topic] : acc
    }, [])
    this.setState({ topics })
  }

  normalizeTitle(title: string) {
    return title && title.toUpperCase().replace(/-/g, ' ');
  }

  render() {
    return (
      <div className="topics">
        <h1>TOPICS / {this.normalizeTitle(this.state.selectedGroup)}</h1>
        <div className='grid'>
          {this.state.topics.map((item, index) => <Button key={index} group={item} />)}
        </div>
      </div>
    )
  }
}

export default withRouter(TopicsList);
