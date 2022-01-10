const formVal=(data) => { 
    const formErr = {};
    if (!data.email) {
        formErr.email = 'Email Address cannot be empty';
      } else if 
      (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
      ) { 
          formErr.email = 'Invalid Email Address';
      }

    if(!data.password || data.password.length<8){
        formErr.password = 'Password should contain at least 8 characters'
    }        
    return formErr;
}

export default formVal;
