import React from 'react'
import styles from '../../styles/LoadingScreen.module.scss'
import Image from 'next/image'
import logo from '../../../public/assets/img/loadingScreen.png'
import { Spinner } from 'react-bootstrap'

const LoadingScreen = () => {
    return (
        <>
            <div className={`${styles?.loadingOverlay}`}>
                <div className="spinner">
                    <Image src={logo} alt='loading screen' quality={100} width={150} height={150} priority />
                </div>
                <span><Spinner size='sm' animation='border' className='me-1' />  Loading...</span>
            </div>
        </>
    )
}

export default LoadingScreen
