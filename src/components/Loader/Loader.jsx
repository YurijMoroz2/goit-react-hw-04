import { CirclesWithBar } from 'react-loader-spinner';

export const Loader =()=>{
  
    return (<CirclesWithBar
        height="30"
        width="30"
        color="#4fa94d"
        outerCircleColor="blue"
        innerCircleColor="gold"
        barColor="red"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />)
}