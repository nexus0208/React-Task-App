import React from 'react';

class Overview extends React.Component {
    render() {
        return (    
                <ul>
                {this.props.items.map(item => (
                <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
      );
    }
  }
  
export default Overview;