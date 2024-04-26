import { CloudLightning, AlertTriangle, Feather } from 'react-feather';

function PriorityIcon({value}:{value: number}) {
  // return <div>{value}</div>
  
  if(value == 3) return <AlertTriangle color='red' />
  else if (value == 2) return <CloudLightning color='yellow' />
  else return <Feather color='green' />
}

export default PriorityIcon
