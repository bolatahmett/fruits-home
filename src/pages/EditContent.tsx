import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Row, Col, Button, message } from 'antd';
import { ContentCard } from '../Model/ContentCard';
import FHPopup from '../components/FHPopup';
import FHEditContent from '../components/FHEditContent';
import { handlePopup } from './../redux/actions/actions';
import { PlusOutlined } from '@ant-design/icons';
import * as fs from 'fs';
import { addItem, getAllItems, removeItem, getItem } from '../Dto/ServerHelper';

export const EditContent = (props: any) => {

    const [popupVisible, setPopupVisible] = useState(false);
    const [productContent, setProductContent] = useState(<></>);
    const [productItems, setProductItems] = useState([] as ContentCard[]);
    const [productItemsCount, setProductItemsCount] = useState(0);

    useEffect(() => {
        if (productItems.length === 0) {
            debugger;
            getProductItems();
        }

    }, []);

    const getProductItems = async () => {
        const result = await getAllItems() as ContentCard[];
        setProductItems(result);
    };

    const edit = (item: ContentCard) => {
        setProductContent(<FHEditContent item={item} saveChanges={saveChanges}></FHEditContent>);
        setPopupVisible(true);
        props.handlePopup(false);
    }
    const deleteContentCard = (item: ContentCard) => {
        item.IsDeleted = "D";
        saveChanges(item);
    }
    const onOk = (e: any) => {
        props.handlePopup(true);
        setPopupVisible(false);
    }
    const onCancel = (e: any) => {
        setPopupVisible(false);
    }
    const saveChanges = (savingItem: ContentCard) => {
        const isExists = productItems.find((item: ContentCard) => {
            return item.ProductCode === savingItem.ProductCode
        });

        let result = {} as ContentCard[];
        if (isExists) {
            result = productItems.map(item => (
                item.ProductCode === savingItem.ProductCode ? savingItem : item)
            );
        } else {

            productItems.push(savingItem);
            result = productItems as ContentCard[];
        }

        setProductItems(result);
        setProductItemsCount(result.length);
    }

    const addProduct = () => {
        const productItem = {
            ImageUrl: "",
            AltInfo: "",
            Title: "",
            Description: "",
            Price: "",
            StockStatus: "",
            ProductType: "",
            ProductCode: "",
        } as ContentCard;
        edit(productItem);

    }

    const saveChangesToDB = async () => {
        for (let index = 0; index < productItems.length; index++) {
            const element = productItems[index];
            await saveChangesToDBOneItem(element);
        }
        message.success('Saved');
    }

    const saveChangesToDBOneItem = async (element: ContentCard) => {
        debugger;
        const jsonQUERY = { ProductCode: element.ProductCode };
        const orjItem = await getItem(jsonQUERY);
        if (orjItem !== "") {
            await removeItem(orjItem);
        }
        if (element.IsDeleted !== "D") {
            await addItem(element);
        }
    };

    const headerContent = <>
        <Button shape="circle" icon={<PlusOutlined />} onClick={addProduct} />
    </>;

    const footerContent = <>
        <Button type="primary" shape="round" onClick={saveChangesToDB}>
            Kaydet
        </Button>
    </>;

    return (

        <Row justify="center" align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <List
                    header={headerContent}
                    footer={footerContent}
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={productItems.filter((item: ContentCard) => { return (item.IsDeleted !== "D") })}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <a key="list-loadmore-edit" onClick={() => edit(item)}>edit</a>
                                , <a key="list-loadmore-more" onClick={() => deleteContentCard(item)}>Delete</a>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={require(`./../images/${item.ImageUrl}`)} />
                                }
                                title={<a>{item.ProductCode}</a>}
                                description={item.Description}
                            />
                            <div>{item.Price}</div>

                        </List.Item>
                    )}
                />
                <FHPopup visible={popupVisible} content={productContent} onOk={onOk} onCancel={onCancel} title={"İçerik Düzenleme"} />
            </Col>
        </Row>
    );
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {
    handlePopup
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContent);
