import React, { Component } from 'react';
import styles from "./GlassModal.module.css";

export default class GlassModal extends Component {
  render() {
    const {name, url, desc} = this.props.item;
    return (
      <div className={styles.banner}>
        <img src={require(`${url}`)} className={styles.imgGlass} alt=''/>
        <div className={styles.content}>
           <h3 className={styles.title}>{name}</h3>
           <p className={styles.text}>{desc}</p>
        </div>    
      </div>
    )
  }
}
