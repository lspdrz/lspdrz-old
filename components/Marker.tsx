import React, { Component, MouseEvent } from 'react';
import Modal from './modal/Modal';

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
        <button onClick={this.toggleModal}>{title}</button>{' '}
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
