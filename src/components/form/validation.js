const validation=(obj)=>{
    //{ username: '', password: '' }
    const respuesta = {};
    const mailValidate= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/i;
    const passValidate= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/i;
    if(!mailValidate.test(obj.username))respuesta.username='El usuario debe ser un email válido.';
    else respuesta.username='';
    if(!passValidate.test(obj.password))respuesta.password='El password debe tener 6-10 digitos, al menos una mayuscula y un numero.';
    else respuesta.password='';
    return respuesta;
}


export default validation;