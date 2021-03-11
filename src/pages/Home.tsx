import React, { Component } from 'react'
import FHCarousel from '../components/FHCarousel'
import FHHeaderMenu from '../components/FHHeaderMenu'
import FHMainContent from '../components/FHMainContent'

export default class Home extends Component {
    render() {
        return (
            <>
                <FHHeaderMenu/>
                <FHCarousel />
                <FHMainContent />
            </>
        )
    }
}
