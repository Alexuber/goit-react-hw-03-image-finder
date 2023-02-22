import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.body.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.hideModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.closeModal}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
