import React from 'react';
import style from './index.module.css';
import utils from '../utils/index.module.css'
import Modal from '../modal/modal';
import Signin from '../signin/signin';

class Profile extends React.PureComponent {
    state = {
        modalOpen: false,
        authorized: false,
    }

    openModal = () => {
        this.setState({modalOpen: true});
    }

    closeModal = () => {
        this.setState({modalOpen: false});
    }

    pressKey = (e) => {
        if (e.key === 'Escape') this.closeModal();
    }

    render() {
        return (
            <div onKeyDown={this.pressKey} className={`${style.profile}`}>
                {
                    this.state.authorized ?
                        '' :
                        <>
                            <div className={`${utils.divButton} ${style.login}`}>
                                <a href="#" onClick={this.openModal}>로그인</a>
                            </div>
                            <div className={`${utils.divButton} ${style.signup}`}>
                                <a href={'/signup'}>회원가입</a>
                            </div>
                            <Modal open={this.state.modalOpen} close={this.closeModal}>
                                <Signin />
                            </Modal>
                        </>
                }
            </div>
        )
    }
}

export default Profile;