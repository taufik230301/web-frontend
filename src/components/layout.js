import React from "react"
import { Link } from "gatsby"
import styles from "../style/index.module.css"


const ListLink = props => (
  <li style={{ 
    display: `inline`, padding: `0.9rem 2rem`
   }}
    className={styles.atas}>
    <Link to={props.to}>{props.children}</Link>
  </li>

)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
          
          <h3 style={{ display: `inline` }}>Palembang Digital</h3>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/"><a className={styles.a}>Acara</a></ListLink>
          <ListLink to="/about/"><a className={styles.a}>Tentang</a></ListLink>
          <ListLink to="/contact/"><a className={styles.a}>Kontak</a></ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
