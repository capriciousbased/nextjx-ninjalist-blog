import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Navbar />
  <h1>HomePage</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque possimus aliquid. Omnis, porro odio necessitatibus veniam consequatur earum praesentium quaerat repudiandae est maxime, amet eaque ullam, ad fuga quidem?</p>
    </div>
  )
}
