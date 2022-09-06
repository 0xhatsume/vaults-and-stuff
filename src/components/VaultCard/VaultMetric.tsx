import React from 'react';


export const VaultMetric = (prop: 
    {title: string, metric: string|number}) => {
    return (
            <p className="">
                <span>{prop.title}</span>
                <span>{prop.metric??'??'}</span>
            </p>
    )
}
