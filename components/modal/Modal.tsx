/* Based on this excellent implementation:
https://dev.to/sandro_roth/how-to-structure-styled-components-with-react-and-ts-27pn */
import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'rebass';
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

import StyledModal from './Modal.css';

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: Function;
  modalClass?: string;
  modalSize?: string;
  title: string;
  notes: string;
}

interface ModalState {
  fadeType: string | null;
}

let modalRoot: HTMLElement | null = null;

class Modal extends Component<ModalProps, ModalState> {
  state = {
    fadeType: null
  };

  private background = createRef<HTMLDivElement>();

  componentDidMount() {
    modalRoot = document.getElementById('modal');
    window.addEventListener('keydown', this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: 'in' }), 0);
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: 'out' });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyDown, false);
  }

  transitionEnd = (e: { propertyName: string }) => {
    if (e.propertyName !== 'opacity' || this.state.fadeType === 'in') return;

    if (this.state.fadeType === 'out') {
      this.props.onClose();
    }
  };

  onEscKeyDown = (e: any) => {
    if (e.key !== 'Escape') return;
    this.setState({ fadeType: 'out' });
    this.props.onClose();
  };

  handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.props.onClose();
  };

  render() {
    const { id, modalSize, modalClass, title, notes } = this.props;
    return modalRoot
      ? ReactDOM.createPortal(
          <StyledModal
            id={id}
            className={`wrapper ${'size-' + modalSize} fade-${
              this.state.fadeType
            } ${modalClass}`}
            role="dialog"
            modalSize={modalSize}
            onTransitionEnd={this.transitionEnd}
          >
            <Box className="box-dialog">
              <div className="box-header">
                <h4 className="box-title">{title}</h4>
              </div>
              <div className="box-content">
                {htmlToReactParser.parse(notes)}
              </div>
              <div className="box-footer"></div>
            </Box>
            <div
              className={`background`}
              onMouseDown={this.handleClick}
              ref={this.background}
            />
          </StyledModal>,
          modalRoot
        )
      : null;
  }
}

export default Modal;
