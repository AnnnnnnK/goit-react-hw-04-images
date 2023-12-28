import { Component } from 'react';
import css from 'components/Modal/Modal.module.css';

class Modal extends Component {
  handleEsc = e => {
    if (e.code === 'Escape') this.props.hideModal();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
    document.body.style.overflow = 'auto';
  }

  onBackdropClick = e => {
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  };

  render() {
    const { largeImgUrl, tag } = this.props;
    return (
      <div className={css.modal} onClick={this.onBackdropClick}>
        <div className={css.modal_content}>
          <img src={largeImgUrl} alt={tag} />
        </div>
      </div>
    );
  }
}

export default Modal;
