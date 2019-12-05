import styled from 'styled-components';

interface ModalProps {
  modalSize?: string;
}

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: ${(props: ModalProps) => {
    switch (props.modalSize) {
      case 'lg':
        return '800';
      default:
        return '480';
    }
  }}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: 'rgba(0, 0, 0, 0.5)';
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    z-index: 1050;
    width: 100%;
    background-color: #808080;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    .box-content {
      color: black;
      padding: 24px;
    }
    .box-header {
      height: 48px;
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box-title {
        color: black;
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
    }
    .box-body {
      font-size: 8px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

export default StyledModal;
