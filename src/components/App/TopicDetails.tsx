import React from 'react';
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";

import data from '../../data/data';

interface Props extends RouteComponentProps<any> {}

interface State {
  item: {
    group: '',
    topic: string
    description: string,
    cs: object,
    sections: string[]
  }
}

class TopicDetails extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {
      item: {
        group: '',
        topic: '',
        description: '',
        cs: {},
        sections: []
      }
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

  printSection(item, title: string) {

  }

  render() {
    const { group, topic, description, sections, cs, diagram } = this.state.item;

    console.log('diagram: ', diagram)

    return (
      <div className="groups">
        <h1>{this.normalizeTitle(group)} / {this.normalizeTitle(topic)}</h1>
        <div className='item'>
          <h1>{topic}</h1>
          <p>{description}</p>
          <div>
            {
              sections.map((item, index) => {
                return (
                  <div key={index}>
                    {
                      Object.keys(item).map((el, index) => {
                        return (
                          <div key={index} className="section">
                            <h2>{el.toUpperCase()}</h2>
                            <ul>
                              {
                                item[el].map((el, i) => <li key={i}>{el}</li>)
                              }
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
            {diagram && <img src={diagram} /> }
          </div>
          <div>
            <h1>Implementation</h1>
            {
              Object.keys(cs).map((item, index) => {
                return (
                  <div>
                    <h2>{item.toUpperCase()}</h2>
                    <iframe key={index} src={`${cs[item]}?fontsize=1&previewwindow=console&view=split&codemirror=0&hidenavigation=1`} className="iframe" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

// for (var key in p) {
//   if (p.hasOwnProperty(key)) {
//       console.log(key + " -> " + p[key]);
//   }
// }


export default withRouter(TopicDetails);
