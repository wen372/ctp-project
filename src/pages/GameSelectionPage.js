import React from 'react';
import Post from '../components/Post';

function GameSelectionPage(props) {
  return (
    <div className="container">
      <Post content="Tick Tack Toe" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
      <Post content="Tetris" pictureSource="/tetris.jpg" link="/Tetris"></Post> 
      <Post content="Hangman" pictureSource="/hangman.jpg" link="/TicTacToe"></Post> 
      <Post content="Game 4" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
      <Post content="Game 5" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
    </div>
  );
}

export default GameSelectionPage;