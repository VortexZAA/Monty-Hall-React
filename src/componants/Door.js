import React from 'react';
import './Door.css';

export default function ShowDoors(props) {
  const { open1, open2, open3, func, prizeLoc, funcRestart, status } = props;

  //Doors array with their ID
  let doors = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  //doors is mapped
  let door = doors.map((door, key) => {
    //Prints each door, depending on whether it is the prize door or not, the corresponding class is applied
    //--------------------------------------------------------DOOR 1
    if (door.id === open1 && door.id === prizeLoc) {
      return (
        <div key={key} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px]'>
          <div id={door.id} className=' h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] prize-bg'></div>
        </div>
      );
    } else if (door.id === open1) {
      return (
        <div key={key} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px]'>
          <div id={door.id} className=' h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] goat-bg'></div>
        </div>
      );
    }
    //Prints each door, depending on whether it is the prize door or not, the corresponding class is applied
    //--------------------------------------------------------DOOR 2
    if (door.id === open2 && door.id === prizeLoc) {
      return (
        <div key={key} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px]'>
          <div id={door.id} className=' h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] prize-bg'></div>
        </div>
      );
    } else if (door.id === open2) {
      return (
        <div key={key} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px]'>
          <div id={door.id} className=' h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] goat-bg'></div>
        </div>
      );
    }
    //Prints each door, depending on whether it is the prize door or not, the corresponding class is applied
    //--------------------------------------------------------DOOR 3
    if (door.id === open3 && door.id === prizeLoc) {
      return (
        <div key={key} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px]'>
          <div id={door.id} className=' h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] prize-bg'></div>
        </div>
      );
    } else if (door.id === open3) {
      return (
        <div key={key} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px]'>
          <div id={door.id} className=' h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] goat-bg'></div>
        </div>
      );
      //if the status has been set, the closed doors will no longer trigger the event if clicked
    } else if (status === 'win' || status === 'lose') {
      return (
        <div key={key}>
          <div id={door.id} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] door-bg-closed'></div>
        </div>
      );
      //else if the game is still on, the doors can be clicked
    } else {
      return (
        <div key={key}>
          <div id={door.id} className=' m-[5px] xl:m-[30px] h-[170px] w-[85px] xl:h-[400px] xl:w-[200px] door-bg-closed' onClick={func}></div>
        </div>
      );
    }
  });
  //returns the corresponding result from props
  function getResult() {
    if (status === 'win') {
      return <h2>YOU WIN!</h2>;
    } else if (status === 'lose') {
      return <h2>YOU LOSE!</h2>;
    } else {
      return <h2 className='invis'>John Cena</h2>;
    }
  }

  //style for the background
  const bg = {
    display: 'flex',
    padding: '0px',
    margin: '0px',
  };

  return (
    <div className='container flex flex-col justify-start items-center'>
      <h1>Monty Hall Game</h1>
      <div style={bg}>{door}</div>
      <button className='bg-white mt-2' onClick={funcRestart}>
        Restart
      </button>
      <br></br>
      {getResult()}
      <hr></hr>
      <p className='w-full mt-4 md:mt-10 px-2 md:w-1/2 border-t-2 pt-2 text-xs md:text-lg '>The Monty Hall Problem gets its name from the TV game show, Let's Make A Deal, hosted by Monty Hall. The scenario is you are given the opportunity to select one closed door of three, behind one of which there is a prize. The other two doors hide “goats” (or some other such “non-prize”), or nothing at all.</p>
    </div>
  );
}
