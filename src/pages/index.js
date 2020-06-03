import React from "react"
import Layout from "../components/layout"
import styles from "../style/index.module.css"



export default function Home() {
  return (

    <Layout>
      <div>
      <img src={`../../patal.png`}
      className={styles.image}
      />
    </div>
    <div style ={{ margin : `10rem auto`}}>
  
      <h2 style ={{ color : `grey` }}>Hallo</h2>
      <h1 style ={{ color: `Black`, margin: `0rem`, padding :`0rem`}}> Wong Kito ! </h1>
      <p className ={styles.p}>
       Palembang Digital adalah group berbagi
       informasi seputar IT development & Digital
        didaerah Sumatera Selatan
       </p> 
      </div>


    </Layout>

  )
}
