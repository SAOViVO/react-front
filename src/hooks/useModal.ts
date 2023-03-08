import React from 'react'

export const useModal = () => {
   const [ isShowing, setIsShowing ] = React.useState<boolean>(false);
   const [ id, setId ] = React.useState<string>('')
   const toggle = () => setIsShowing(!isShowing)
   const open = (id: string) => {
    setId(id); 
    setIsShowing(true)
   }
   return {
    isShowing,
    toggle, 
    open, 
    id
   }
}

