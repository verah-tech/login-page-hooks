import { useState, useEffect } from 'react';

const useLoginfrm = (options, formVal) => { 
    const [whenLoading, setLoading] = useState(false); 
    const [data, setData] = useState({});
    const [formErr, newErr] = useState({});
    
    useEffect(() => {
        if (Object.keys(formErr).length === 0 && whenLoading) { 
            options();
        }
    }, [formErr, options, whenLoading]);

    const whenSubmitted = (e) => { e.preventDefault(); 
        newErr(formVal(data)); 
        setLoading(true);
    };

    const whenChanged = (e) => { e.persist();
    setData(data => ({ ...data, [e.target.name]: e.target.value }));
    };

    return {  
        whenSubmitted,
        whenChanged,
        data, 
        formErr,
    }
};

export default useLoginfrm;
