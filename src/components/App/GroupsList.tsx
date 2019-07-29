import React from 'react';

import data from '../../data/data';
import Button from '../Button/Button';

interface Props {}

interface State {
  groups: string[]
}

class GroupsList extends React.Component<Props, State> {
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
    const groups: string[] = data.reduce((acc: string[], cur) => acc && !acc.includes(cur.group.trim().toLowerCase()) ? [...acc, cur.group.trim().toLowerCase()] : acc, [])
    this.setState({ groups })
  }

  render() {
    return (
      <div className="groups">
        <h1>Groups</h1>
        <div className='grid'>
          {this.state.groups.map((item, index) => <Button key={index} group={item} />)}
        </div>
      </div>
    )
  }
}

export default GroupsList;
