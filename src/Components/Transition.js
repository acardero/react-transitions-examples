import React from 'react';
import { Grid, Button, Well } from 'react-bootstrap';
import { Transition } from 'react-transition-group';

export class TransitionExample extends React.Component {
  state = {
    show: false,
    entered: false,
  };

  render() {
    const { show } = this.state;
    return (
      <Grid style={{ paddingTop: '2rem' }}>
        <Button
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }));
          }}
        >
          Toggle
        </Button>
        <Well style={{ marginTop: '1rem' }}>
          <Transition
            in={show}
            timeout={1000}
            unmountOnExit
          >
            {state => {
              switch (state) {
                case 'entering':
                  return 'Entering…';
                case 'entered':
                  return 'Entered!';
                case 'exiting':
                  return 'Exiting…';
                case 'exited':
                  return 'Exited!';
                default:
                  return 'This will never happen';
              }
            }}
          </Transition>
        </Well>
      </Grid>
    );
  }
}