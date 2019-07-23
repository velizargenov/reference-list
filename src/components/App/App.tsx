import React from 'react';

import data from '../../data';
import GroupsList from '../GroupsList/GroupsList';

interface Props {}

interface State {
  groups: string[]
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      groups: []
    }

    this.getGroups = this.getGroups.bind(this);
  }

  componentDidMount() {
    this.getGroups();
  }

  getGroups() {
    const groups: string[] = data.reduce((acc: string[], cur) => acc && !acc.includes(cur.group) ? [...acc, cur.group] : acc, [])
    this.setState({ groups })
  }

  render() {
    return (
      <div>
        {<GroupsList groups={this.state.groups} />}
      </div>
    )
  }
}

export default App;
