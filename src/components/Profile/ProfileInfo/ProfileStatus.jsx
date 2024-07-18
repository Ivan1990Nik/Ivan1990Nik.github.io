import React from 'react';
import profile from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {



  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })

  }
  deActivateEditMode = () => {

    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);

  }

  onStatusChenge = (e) => {
    this.setState({
      status:
        e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }

  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div >
            <div className={profile.status} onDoubleClick={this.activateEditMode} >{this.props.status || "fack"}</div>
          </div>
        }
        {this.state.editMode &&
          <div >
            <input className={profile.status} onChange={this.onStatusChenge} value={this.state.status} autoFocus={true} onBlur={this.deActivateEditMode}></input>
          </div>
        }
      </div>
    )
  }
}
export default ProfileStatus;