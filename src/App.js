import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Comments from './components/comments';
import Pagination from './components/pagination';

import './App.css';


const App = () => {

const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [commentsPerPage, setCommentsPerPage] = useState(10);

const indexOfLastComment = currentPage * commentsPerPage;
const indexOfFirstComment = indexOfLastComment - commentsPerPage;
const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

useEffect(() => {
    const fetchComments = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComments(res.data);
        setLoading(false);
    }
    fetchComments();
},[]);


  return (
    <div className="container">
      <h1 className="text-primary mt-5">Pagination Demo</h1>
      <Comments comments={currentComments} loading={loading}></Comments>
      <Pagination commentsPerPage={commentsPerPage} totalComments={comments.length} paginate={paginate}></Pagination>
    </div>
  )
}

export default App;
