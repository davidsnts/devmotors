"use client"

import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Submenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768)
                setIsOpen(false)
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <section className={styles.submenu}>

            <div className={styles.submenuIcon} onClick={toggleMenu}>
                <Menu size={34} color='#121212' />
                Serviços
            </div>
            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
                {isOpen && (
                    <button  color='#121212' onClick={toggleMenu} className={styles.closeButton}><X size={54} /></button>
                )}
                <li><Link href={'/post/pagina-1'}>Pagina 1</Link></li>
                <li><Link href={'/post/pagina-2'}>Pagina 2</Link></li>
            </ul>
        </section>
    )
}

export default Submenu