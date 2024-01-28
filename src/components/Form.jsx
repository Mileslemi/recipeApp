import React from 'react'
import styles from './form.module.css'

const Form = () => {
  return (
    <div className={styles.formContainer} >
        <input type='text' className={styles.formInput} placeholder='Search Recipe...'/>
        </div>
  )
}

export default Form