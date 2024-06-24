


export default function checkFormData(email,password){
    
    // return boolean value
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    
    if (!isValidEmail && !isValidPassword) return {email:"email is not valid", password:"password is not valid"};
    else if (!isValidPassword) return { email: "", password: "password is not valid" };
    else if (!isValidEmail) return { email: "email is not valid", password: "" };
    
    return null;
}