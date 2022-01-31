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
import Select from './select'

// import axios from 'axios';
// import './Index.css';
// import '../css/tailwind.css';

const Home = (props) => {
    return (
        
      <div>
          <Select />
            <Index 
              tasks={props.tasks}
            />
      </div>
    )
}
  
  export const getStaticProps = async () => {
    // URLはlocalhostではなくapiとなる
    const tasks = await fetch("http://api:3000/tasks", {method: "GET"});
    const json = await tasks.json();
    console.log(tasks)

    return {
      props: {
        tasks: json,
        // task_id: json_task
      },
    };
  }
  
  export default Home;
