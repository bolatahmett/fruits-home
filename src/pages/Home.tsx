import React, { Component } from 'react'
import FHContent from '../components/FHContent'
import FHCarousel from '../components/FHCarousel'

export default class Home extends Component {
    render() {
        return (
            <>
                <FHCarousel />
                <FHContent />
            </>
        )
    }
}
