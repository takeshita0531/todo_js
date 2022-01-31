import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import React from 'react';
// import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import Index from './Index';
import New from '../components/New';
import Edit from '../components/Edit';
import Search from '../components/Search'
import Index from '../components/Index'
import App from '../components/App'
// import axios from 'axios';
// import './Index.css';
// import '../css/tailwind.css';

const Home = (props) => {
    return (
      <div className="bg-gray-200 h-10">
        <div className="h-10 flex justify-evenly items-center">
            <h2 className="font-black"><Link href="/">投稿一覧</Link></h2>
            <h2 className="font-black"><Link href="/new">新規投稿</Link></h2>
            <h2 className="font-black"><Link href="/search">投稿検索</Link></h2>
        </div>
      </div>
    )
  }
  
  export default Home;
