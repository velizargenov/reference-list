import React from 'react';

import './GroupsList.css';
import { Groups, GroupProps } from '../../interfaces/GroupsList.interface';

const Group: React.FC<GroupProps> = ({ group }) => (
  <div className="group">{group}</div>
);

const GroupsList: React.FC<Groups> = ({ groups }) => (
  <div className='grid'>
    {groups.map((item, index) => <Group key={index} group={item} />)}
  </div>
);

export default GroupsList;
