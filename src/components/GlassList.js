import React, { Component } from 'react';
import GlassItem from './GlassItem';
import styles from "./GlassList.module.css";
import GlassModal from './GlassModal';


export default class GlassList extends Component {

    glassesList = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];

    renderGlassesItem = () => {
        const htmlItem = this.glassesList.map( (item) => {
            return(
                <div key={item.id} className={styles.col}>
                    <GlassItem setSelectedItem={this.setSelectedItem} product={item}/>
                </div>
            )
        });
        return htmlItem;
    };

    state = { selectedItem: this.glassesList[0] };
    setSelectedItem = (dataFromChild) => {
        this.setState({
            selectedItem: dataFromChild,
        });
    };

  render() {
    return (
      <div className={styles.banner}>
          <h1 className={styles.header}>TRY GLASSES APP ONLINE</h1>
          <div>
              <GlassModal item={this.state.selectedItem}/>
          </div>
          <div className={styles.bannerItem}>
              <div className={styles.row}>
                  {this.renderGlassesItem()};
              </div>
          </div>
      </div>
    )
  }
}
