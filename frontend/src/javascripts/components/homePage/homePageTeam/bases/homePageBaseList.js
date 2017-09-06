import React, {Component} from 'react';
import BaseItem from './homePageBaseItem';
import template from '../../../../../images/template_gallery_icon.png'

import scratch from '../../../../../images/empty_template_icon.png'
import ModalImportSpreadsheet from './baseImportPopUp'

let temporaryKey = 0;

class BaseList extends Component {
	constructor(props) {
		super(props)
		this.state ={
			showMewnu: false,
			modalClass: false
		}
		this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
    	this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}
  	handleClickOnMenu(event) {
	    if (!this.state.showMewnu) {
	      document.addEventListener('click', this.handleOutsideClick, false);
	    } else {
	      document.removeEventListener('click', this.handleOutsideClick, false);
	    }

	     if (this.refs.createBase) {
	      this.setState(prevState => ({
	         showMewnu: !prevState.showMewnu
	      }));
	    }
  	}
	handleOutsideClick(e) {
	    if ( event.target.closest(".addBasePopover") === null) {
	      if (this.node) {
	        if (this.node.contains(e.target)) {
	          return;
	        }
	      }
	    this.handleClickOnMenu();
	    }
  	}
	render() {
		const props = this.props
		if (this.props.bases) {
			return (
				<div className='base-list'>
					{ this.props.bases && this.props.bases.map(function (base) {
						return (
							<div key={base._id || ++temporaryKey}>
								<BaseItem className="base-list-item"
								          handleClick={props.handleClick}
								          base={base}
								          menu={props.menu}
								/>
							</div>
						)
					})
					}
					<div className='relative'>
						<div className='btn-add-base' onClick={(event) => this.handleClickOnMenu(event)}>+</div>
						<div ref="createBase" className ={
								this.state.showMewnu ? "addBasePopover" : "none"} >
							<div>
								<div className='messageTip'></div>
								<div className='options'> 
									<img src={template} />
									<div className='text'>Start with a template</div>
								</div>
								<ModalImportSpreadsheet teamId={this.props.teamId}/>
								<div className='options' onClick={(event) => {props.onNewBaseClick('#234FED', props.teamId); this.handleClickOnMenu(event)}}> 
									<img src={scratch} />
									<div className='text'>Start from scratch</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (<div></div>)
		}

	}
}

export default BaseList
