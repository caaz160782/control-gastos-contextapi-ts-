import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({percentage}:any) => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: percentage==='100.00' ?'#DC2626':'#3b82f6',
          pathColor: percentage==='100.00' ?'#DC2626':'#3b82f6',
          trailColor: '#F5F5F5'
        })}
      />
    </div>
  )
}

export default CircularBar