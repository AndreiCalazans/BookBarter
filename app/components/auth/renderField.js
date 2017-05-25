import React from 'react';

export const renderField = ({input , label, type ,min ,max, meta: {touched ,error, warning}}) => (
    <div className='form-group'>
        <label className='col-sm-2 control-label'>{label}</label>
        <div className='col-sm-10'> 
            <input className='form-control' min={min}  max={max} {...input} placeholder={label} type={type} />
            {touched && 
            ((error && <p className='bg-warning' ><span>{error}</span></p>) || 
                (warning && <p className='bg-info'><span >{warning}</span></p>)    
                )}
        </div>
    </div>
)