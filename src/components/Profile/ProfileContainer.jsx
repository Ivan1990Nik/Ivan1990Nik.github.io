import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, } from '../../redux/profile-reducer';
import { Navigate, useParams } from "react-router-dom"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const withRouter = WrappedComponent => props => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
    // etc...
    />
  );
};



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 31330;
    }




    this.props.getUserProfile(userId)

  }

  render() {
    
    return (
      < Profile
        {...this.props}
        profile={this.props.profile} />
    )
  }
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,

});



export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
) (ProfileContainer)

