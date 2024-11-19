import React from 'react'
import styles from './trail.module.scss'

const Trail = ({count}) => {
  return (
    <div className={styles.trail}>
    <div className={styles.trail_paths}></div>
    </div>
  )
}

export default Trail