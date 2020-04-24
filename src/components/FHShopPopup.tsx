import React, { Component } from 'react'
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';

interface FHShopPopupProps {
    visible: boolean;
}

export default class FHShopPopup extends React.Component<FHShopPopupProps, any> {

    constructor(props: any) {
        super(props);
        this.state = { visible: false };

        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({ visible: this.props.visible });
    }

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        if (this.state.visible)
            console.log("test popup");

        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}
