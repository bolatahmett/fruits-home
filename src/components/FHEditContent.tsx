import React, { useEffect } from 'react'
import { Input, Form, Select } from 'antd';
import { ContentCard } from '../model/ContentCard';
import TextArea from 'antd/lib/input/TextArea';
import { connect } from 'react-redux';

interface FHEditContentProps {
    item: ContentCard;
    saveChanges: (item: ContentCard) => void;
    handlePopup: any;
}

function FHEditContent(props: FHEditContentProps) {
    const [form] = Form.useForm();
    useEffect(() => {
        if (props.handlePopup) {
            const savingItem: ContentCard = form.getFieldsValue(true) as ContentCard;
            props.saveChanges(savingItem);
        }
    }, [props.handlePopup])

    useEffect(() => {
        form.setFieldsValue(props.item);
    }, [props.item]);

    return (
        <div>
            <Form form={form}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{
                    ...props.item
                }}
                size={"small"}
            >

                <Form.Item name="ProductCode" label="ProductCode">
                    <Input />
                </Form.Item>
                <Form.Item name="ProductType" label="ProductType">
                    <Select>
                        <Select.Option value="vegetable">Vegetable</Select.Option>
                        <Select.Option value="fruit">Fruit</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="StockStatus" label="StockStatus">
                    <Select>
                        <Select.Option value="1">Stokta Ürün Var</Select.Option>
                        <Select.Option value="0">Tükendi</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="Price" label="Price">
                    <Input />
                </Form.Item>
                <Form.Item name="Description" label="Description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="Title" label="Title">
                    <Input />
                </Form.Item>
                <Form.Item name="AltInfo" label="AltInfo">
                    <Input />
                </Form.Item>
                <Form.Item name="ImageUrl" label="ImageUrl">
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    const handlePopup = state.handlePopup;
    return { handlePopup };
};
export default connect(mapStateToProps, {})(FHEditContent);

