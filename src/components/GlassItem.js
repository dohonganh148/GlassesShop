import React, { Component } from "react";
import styles from "./GlassItem.module.css";
export default class GlassItem extends Component {
  render() {
    const { url } = this.props.product;
    return (
      <div className={styles.item}>
        <button
          onClick={() => {
            this.props.setSelectedItem(this.props.product);
          }}
          className={styles.btn}
        >
          <img className={styles.img} src={require(`${url}`)} alt="" />
        </button>
      </div>
    );
  }
}
