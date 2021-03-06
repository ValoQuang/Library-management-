import { CircularProgress } from '@mui/material'
import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardText } from 'reactstrap'

interface userProp {
  auth: any
  editPassword: any
  isLoading: boolean
  errMess: any
  user: any
}
interface userState {}

class UserDetail extends Component<userProp, userState> {
  constructor(props: userProp) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <CircularProgress />
          </div>
        </div>
      )
    } else if (this.props.errMess) {
      return (
        <div className="container loading">
          <div className="row heading">
            <div className="col-12">
              <br />
              <br />
              <br />
              <br />
              <h3>{this.props.errMess}</h3>
            </div>
          </div>
        </div>
      )
    } else
      return (
        <div className="container mt-6 home text-center align-self-center">
          <div className="row text-center justify-content-center">
            <Card className="heading">
              <CardHeader>
                <h3>User Details</h3>
              </CardHeader>
              <CardBody>
                <CardText>
                  <h5>
                    {' '}
                    First Name :{' '}
                    {'          ' + this.props.user.firstname ||
                      this.props.user.givenName}
                  </h5>
                  <h5>
                    {' '}
                    Last Name :{' '}
                    {'          ' + this.props.user.lastname ||
                      this.props.user.familyName}
                  </h5>
                  <h5>
                    {' '}
                    {this.props.user.admin ? 'Admin Id : ' : 'Roll No.'} : (
                    {'          ' + this.props.user.roll ||
                      this.props.user.googleId}{' '}
                    )
                  </h5>
                  <h5> Email : {'          ' + this.props.user.email}</h5>
                  <h5>
                    {' '}
                    Username :{' '}
                    {'          ' + this.props.user.username ||
                      this.props.user.name}
                  </h5>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      )
  }
}

export default UserDetail
