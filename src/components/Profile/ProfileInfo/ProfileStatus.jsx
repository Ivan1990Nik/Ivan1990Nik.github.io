import React from 'react';
import profile from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {



  state = {
    editMode: false,
    status:this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })

  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    } );
    this.props.updateStatus(this.state.status);
    
  }

  onStatusChenge = (e) => {
    this.setState({
      status:
      e.currentTarget.value
    })
   
  }
  render() {

    return (
      <div>
        {!this.state.editMode &&
          <div >
            <div onDoubleClick={ this.activateEditMode } >{this.props.status}</div>
          </div>
        }
        {this.state.editMode &&
          <div >
            <input onChange={this.onStatusChenge} value={this.state.status} autoFocus={true} onBlur={ this.deActivateEditMode}></input>
          </div>
        }
      </div>
    )
  }
}
export default ProfileStatus;