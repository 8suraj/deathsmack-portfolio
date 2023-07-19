import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
export function InputField({
    name,
    placeholder,

    type,
}) {
    const [field, meta] = useField(name);
    const [error, setError] = useState(null);
    useEffect(() => {
        setError(meta.error);
    }, [meta.error, meta.touched]);
    return (
        <>
            <div className='contact__card--fg'>
                <input
                    {...field}
                    className='contact__card--fc'
                    placeholder={placeholder}
                    type={type}
                />
            </div>
            {error && <span className='error'>{error}</span>}
        </>
    );
}