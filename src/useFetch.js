import {useState, useEffect} from 'react'

const useFetch = (url) =>{
    const [data, setData] = useState(null); 
    //const [name, setName] = useState('mario');
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
//could wrap useEffect in setTimeout to see the loading message
useEffect(() => {
    fetch(url)
        .then(res =>{
            //console.log(res);
            if(!res.ok){
                throw Error('could not fetch data')
            }
            return res.json();
        })
        .then(data =>{
            //console.log(data);
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            //console.log(err.message);
        })    
        
    
    //console.log('use effect ran');
    //console.log(name);
    //console.log(blogs);
//empty dependency array only lets function run once on first render. name dependency runs function when 
    
},[url]);
return {data, isLoading, error}
}


//before return and doesn't need to be stored in const. usually fetch data or communicate with authentication service
//known as side effects. fires on every render
    
export default useFetch;