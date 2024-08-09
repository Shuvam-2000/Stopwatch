import { useEffect, useState} from 'react';
import './stopwatch.css';

const Stopwatch = () => {  

  // useState for hour , min , sec and reset
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0); 
  const [hour, setHour] = useState(0);
  const [start, setStart] = useState(false)

  // using useeffect for changing the min, sec, hour and 
  // setinterval to update the time in speciifed number of mlliseconds
  useEffect(() => {

    // taking the value of updateTIme as null to update when start becomes true
    var updateTime = null;

    if(start){
      updateTime = setInterval(() => {
        setSec((prevSecond) => {
          if(prevSecond === 59){
            setMin((prevMin) => {
              if(prevMin === 59){
                setHour((prevHour) => prevHour + 1)
              }else{
                return prevMin + 1
              }
              return 0                   // return 0 when the min reaches 59 and hour updates to 1
            })
          return 0                       // return 0 when the second reaches 59 and min updates to 1
          }else{
            return prevSecond + 1
          }
        });
      }, 1000);
    }
  
    return () => clearInterval(updateTime); 
  }, [start]); 
  
  // function for starting the stop watch
  const startTime = () => {
    setStart(true)
  }

  // function for stopping the stop watch
  const stopTime = () => {
    setStart(false)
  }

  // function for reseting the stop watch
  const resetTime = () => {
    setStart(true)
    setHour(0)
    setMin(0)
    setSec(0)
  }

  return (
    <div className='stopwatch'>
      <h1>Stopwatch</h1>  
      <p>
          {hour<10 ? "0" +hour: hour} : 
          {min<10 ? "0" +min: min} : 
          {sec<10 ? "0" +sec: sec}
      </p>
      <button onClick={startTime}>START</button>
      <button onClick={stopTime}>STOP</button>
      <button onClick={resetTime}>RESET</button>
    </div>
  );
};

export default Stopwatch;  

