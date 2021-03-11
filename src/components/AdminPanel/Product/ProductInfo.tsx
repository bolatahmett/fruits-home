import React from 'react'
// import { Button, Col, Row } from 'antd'
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { User } from '../../../model/User';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function ProductInfo(props: any) {
    // const { t } = useTranslation();
    return (
         <Redirect to="/edit-content" />
        // <Row justify={"center"}>
        //     <Col xs={20} sm={20} md={18} lg={12} xl={12} style={{ textAlign: "center" }}>
        //                 {props.user.IsAdmin &&
        //                     <Link to={"/edit-content"}>
        //                         <Button type="primary" shape="round" >{t("add.product.button")}</Button>
        //                     </Link>
        //                 }
        //     </Col>
        // </Row>
    )
}


const mapStateToProps = (state: any) => {
    const user = state.user as User;
    return { user };
}

export default connect(mapStateToProps)(ProductInfo);
 