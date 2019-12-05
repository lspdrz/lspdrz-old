import React, { Component, MouseEvent } from 'react';
import { Box } from 'rebass';

import Modal from '../modal/Modal';

interface MarkerProps {
  lat: number;
  lng: number;
  title: string;
  notes: string;
}

interface MarkerState {
  isModalOpen: boolean;
}

class Marker extends Component<MarkerProps, MarkerState> {
  state = {
    isModalOpen: false
  };

  toggleModal = (e: MouseEvent) => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { title, notes } = this.props;
    return (
      <div>
        <Box
          sx={{
            display: 'inline-block',
            color: 'black',
            bg: '#808080',
            px: 2,
            py: 1,
            borderRadius: 9999,
            ':hover': {
              backgroundColor: 'black',
              color: '#808080',
              cursor: 'pointer'
            }
          }}
          onClick={this.toggleModal}
          variant="primary"
          mr={2}
        >
          {title}
        </Box>
        {this.state.isModalOpen && (
          <Modal
            isOpen={this.state.isModalOpen}
            onClose={this.toggleModal}
            id="modal"
            title={title}
            notes={notes}
          />
        )}
      </div>
    );
  }
}

export default Marker;
