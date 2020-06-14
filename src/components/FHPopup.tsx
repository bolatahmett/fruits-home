import React from 'react';
import Modal from 'antd/lib/modal/Modal';

interface FHPopupProps {
    visible: boolean;
    content: React.ReactNode;
    onOk?: (e: any) => void;
    onCancel?: (e: any) => void;
    title: string;
}

export default function FHPopup(props: FHPopupProps) {
    return (
        <div>
            <Modal
                title={props.title}
                visible={props.visible}
                onOk={props.onOk}
                onCancel={props.onCancel}
            >
                {props.content}
            </Modal>
        </div>
    );
}




