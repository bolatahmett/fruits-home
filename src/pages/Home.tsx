import React, { Component } from 'react'
import FHCarousel from '../components/FHCarousel'
import FHMainContent from '../components/FHMainContent'

export default class Home extends Component {
    render() {
        return (
            <>
                <FHCarousel />
                {/* <FHContent /> */}
                <FHMainContent />
            </>
        )
    }
}
