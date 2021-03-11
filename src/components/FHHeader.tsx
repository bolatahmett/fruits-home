import React, { useState } from "react";
import { Row, Col } from "antd";
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../model/User";
import FHLeftHeader from "./FHLeftHeader";
import FHRightHeader from "./FHRightHeader";


function FHHeader(props: any) {
    
    const [searchVisible, setSearchVisible] = useState(false);

    return (
        <>
            <Row style={{ width: "100%" }}>
                <Row justify="center" style={{ width: "100%" }}>
                    <Col xs={4} sm={4} md={4} lg={4} xl={2} style={{ textAlign: "left" }}>
                        <FHLeftHeader setSearchVisible={setSearchVisible} searchVisible={searchVisible}></FHLeftHeader>
                    </Col>
                    <Col xs={14} sm={13} md={13} lg={14} xl={14} style={{ textAlign: "center" }} >
                        <Link to={"/"}>
                            <h1 className={"header-text"}> FRUITS HOME</h1>
                        </Link>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={3} xl={2} style={{ textAlign: "right" }}>
                        <FHRightHeader></FHRightHeader>
                    </Col>
                </Row>
                <Row style={{ width: "100%" }} justify={"center"}>
                    <Col xs={20} sm={20} md={18} lg={12} xl={12} style={{ textAlign: "center" }}>
                        {searchVisible && <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ marginRight: "20px" }}
                        />}
                    </Col>
                </Row>
                <br></br>
                
            </Row>
        </>);
}

const mapStateToProps = (state: any) => {
    const user = state.user as User;
    return { user };
}

export default connect(mapStateToProps)(FHHeader);