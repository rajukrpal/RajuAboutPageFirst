import React from 'react'
import styled from 'styled-components'

const Contect = () => {

    const Wrapper = styled.section``;
  return (
    <>
      <Wrapper className='section'>
        <h2 className='text-2xl py-6 text-center'>Oure contect</h2>

        <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28828.905183177096!2d84.24664810038227!3d25.41775681026244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716881179292!5m2!1sen!2sin" 
         width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </Wrapper>
    </>
  )
}

export default Contect
