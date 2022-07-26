import React, { useEffect, useState } from 'react';
import Validate from './Validate';

function UseForm(callback, validate) {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleSubmit = (e, cpass) => {
        e.preventDefault();
        setErrors(Validate(values, cpass));
        setIsSubmitting(true);
    }

    useEffect( () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
        }
      }, [errors]);

      return {
        handleChange,
        handleSubmit,
        values,
        errors,
      };
    };
    
    export default UseForm;