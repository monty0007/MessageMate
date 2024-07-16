import React from 'react'

export const formatDate=(date)=> {
    const hours= new Date(date).getHours();
    const mintues=new Date(date).getMinutes();
    return `${hours <  10 ? '0'+hours : hours}: ${mintues <  10 ? '0'+mintues : mintues}`
}
