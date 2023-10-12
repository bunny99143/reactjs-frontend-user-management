import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const styles ={
        footer:{
            backgroundColor: "#1976d2",
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            position: 'fixed',
            bottom: '0',
            width: '100%'
        },
        footerATag:{
            color: 'white',
            textDecoration: "none",
            margin: '10px'
        }
    }
  return (
    <footer style={styles.footer}>
        &copy; 2023 User Management |
        <Link to="/" style={styles.footerATag}>Home</Link> |
        <Link to="/about" style={styles.footerATag}>About</Link> |
        <Link to="/contact" style={styles.footerATag}>Contact</Link>
    </footer>
  )
}

export default Footer