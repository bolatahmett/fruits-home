import React, { Component } from 'react'
import FHContent from '../components/FHContent'
import FHCarousel from '../components/FHCarousel'
import { FHMainContent } from '../components/FHMainContent'
import { Divider } from 'antd'
import FHHeaderMenu from '../components/FHHeaderMenu'

export default class Home extends Component {
    render() {
        return (
            <>
                <FHCarousel />
                <FHContent />
                {/* <FHMainContent></FHMainContent> */}
            </>
        )
    }
}
