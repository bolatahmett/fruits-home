import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Row, Col, Button, message, Spin } from 'antd';
import { ContentCard } from '../model/ContentCard';
import FHPopup from '../components/FHPopup';
import FHEditContent from '../components/FHEditContent';
import { handlePopup } from './../redux/actions/actions';
import { PlusOutlined } from '@ant-design/icons';
import { addItem, getAllItems, removeItem, getItem } from '../dto/ServerHelper';

export const EditContent = (props: any) => {

    const [popupVisible, setPopupVisible] = useState(false);
    const [productContent, setProductContent] = useState(<></>);
    const [productItems, setProductItems] = useState([] as ContentCard[]);
    const [productItemsCount, setProductItemsCount] = useState(0);
    const [spinTip, setSpinTip] = useState("Loading...");

    useEffect(() => {
        if (productItems && productItems.length === 0) {
            getProductItems();

        }
    }, [productItems]);

    const getProductItems = async () => {
        const result = await getAllItems() as ContentCard[];
        setProductItems(result);
        setSpinTip("");
    };

    const edit = (item: ContentCard, itemStatus: string) => {
        setProductContent(<FHEditContent item={item} itemStatus={itemStatus} saveChanges={saveChanges}></FHEditContent>);
        setPopupVisible(true);
        props.handlePopup(false);
    }
    const deleteContentCard = (item: ContentCard) => {
        let deletedItem = item;
        deletedItem.Status = "D";
        saveChanges(deletedItem);
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
            Price: 0,
            StockStatus: "",
            ProductType: "",
            ProductCode: "",
        } as ContentCard;
        edit(productItem, "N");
    }

    const saveChangesToDB = async () => {
        setSpinTip("Saving...");
        for (let index = 0; index < productItems.length; index++) {
            const element = productItems[index];
            if (element.Status === "D" || element.Status === "N" || element.Status === "E")
                await saveChangesToDBOneItem(element);
        }
        setSpinTip("");
        message.success('Saved');
    }

    const saveChangesToDBOneItem = async (element: ContentCard) => {

        debugger;
        const jsonQUERY = { "ProductCode": element.ProductCode };
        if (element.Status === "E") {
            await removeItem(jsonQUERY);
        }

        if (element.Status === "N" || element.Status === "E") {
            element.Status = "";
            await addItem(element);
        }

        if (element.Status === "D") {
            await removeItem(jsonQUERY);
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
        <Spin spinning={spinTip !== ""} tip={spinTip}>
            <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <List
                        header={headerContent}
                        footer={footerContent}
                        className="demo-loadmore-list"
                        itemLayout="horizontal"
                        dataSource={productItems === undefined ? undefined : productItems.filter((item: ContentCard) => { return (item.Status !== "D") })}
                        renderItem={item => (
                            <List.Item
                                actions={[
                                    <a key="list-loadmore-edit" onClick={() => edit(item, "E")}>edit</a>
                                    , <a key="list-loadmore-more" onClick={() => deleteContentCard(item)}>Delete</a>
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={require(`./../images/${item.ImageUrl === undefined || item.ImageUrl === "" ? "no_image_available.jpg" : item.ImageUrl}`)} />
                                    }
                                    title={<a href="/">{item.ProductCode}</a>}
                                    description={item.Description}
                                />
                                <div>{item.Price}</div>

                            </List.Item>
                        )}
                    />
                    <FHPopup visible={popupVisible} content={productContent} onOk={onOk} onCancel={onCancel} title={"İçerik Düzenleme"} />
                </Col>
            </Row>
        </Spin>
    );
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {
    handlePopup
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContent);
