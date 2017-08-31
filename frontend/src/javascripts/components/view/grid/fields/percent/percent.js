import React from 'react';
import { Input } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import Field from '../field';
import './percent.scss';

class Percent extends Field {
  constructor(props) {
    super(props);
    this.state = { 
        percent: '' 
    }
}
  
  renderActiveField() {
    return (
        <NumberFormat className='percent-input' 
            thousandSeparator={true} suffix={'%'} 
            value={this.state.percent}
            onChange={(event) => this.setState({percent: event.target.value})}
            decimalPrecision={1}
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            autoFocus={true}
        />
    )
  }  
}  

export default Percent;