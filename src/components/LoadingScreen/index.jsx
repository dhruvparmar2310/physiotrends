import React from 'react'
import styles from '../../styles/LoadingScreen.module.scss'
import Image from 'next/image'
import logo from '../../../public/assets/img/loadingScreen.png'

const LoadingScreen = () => {
    return (
        <>
            <div className={`${styles?.loadingOverlay}`}>
                <div className="spinner">
                    <Image src={logo} alt='loading screen' quality={100} width={150} height={150} />
                </div>
                <span>Loading...</span>
            </div>
        </>
    )
}

export default LoadingScreen
