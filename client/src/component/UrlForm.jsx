import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { postURL } from '../actions/postAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class FooterForm extends Component {
  state = {
    longUrl: '',
    isOpen: true,
    msg: null
  };

  static propTypes = {
    postURL: PropTypes.func.isRequired,
    newUrl: PropTypes.object.isRequired
  };

  componentWillUpdate(prevProps) {
    const { newUrl } = this.props;
    // check for new shortened url

    if (newUrl !== prevProps.newUrl) {
      if (prevProps.newUrl.newUrl !== null) {
        // Check if prevProps contain shortUrl property
        if (prevProps.newUrl.newUrl.hasOwnProperty('shortUrl')) {
          this.setState({
            msg: prevProps.newUrl.newUrl.shortUrl
          });
        }
        // Check if prevProps contain msg property
        if (prevProps.newUrl.newUrl.hasOwnProperty('msg')) {
          this.setState({
            msg: prevProps.newUrl.newUrl.msg
          });
        }
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const { longUrl } = this.state;

    const newUrl = {
      longUrl
    };

    this.props.postURL(newUrl);

    this.setState({
      isOpen: true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //  Toggle alert
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className='group-url-form'>
        <TransitionGroup>
          {this.state.msg ? (
            <CSSTransition timeout={500} className='fade show'>
              <Alert
                color='danger'
                isOpen={this.state.isOpen}
                toggle={this.toggle}
              >
                {this.state.msg}
              </Alert>
            </CSSTransition>
          ) : null}
        </TransitionGroup>
        <Form onSubmit={this.handleSubmit} className='url-form'>
          <input
            type='text'
            name='longUrl'
            id='longUrl'
            onChange={this.handleChange}
            placeholder='Paste the link you want to shorten here.......'
            className='form-control'
          />
          <Button>Shorten</Button>{' '}
        </Form>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newUrl: state.post
});

export default connect(mapStateToProps, { postURL })(FooterForm);
