"use client"
import React from 'react'
import styled from '@emotion/styled'

const SnsButtons = styled.div`
  margin-bottom: 20px;
  display: grid;
  gap: 8px;
`

const Button = styled.a`
  display: grid;
  place-content: center;
  width: 90px;
  height: 24px;
  padding: 4px 12px;
  font-size: 14px;
  text-decoration: none;
  border-radius: 15px;
`

const TwitterButton = styled(Button)`
  background-color: #55acee;
  color: #fff;
`

// const FacebookButton = styled(Button)`
//   background-color: #3b5998;
//   color: #fff;
// `

type Props = {
  url: string
  title: string
}

const SnsBtn = ({ url, title }: Props) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <SnsButtons>
      <TwitterButton href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer">
        {/* <img src="/icon/white/twitter-brands.svg" alt="Twitter" width="20" height="20" /> */}
        <p>Twitter(X)</p>
      </TwitterButton>
      {/* <FacebookButton href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
        <img src="/icon/white/facebook-brands.svg" alt="Facebook" width="20" height="20" />
      </FacebookButton> */}
    </SnsButtons>
  )
}

export default SnsBtn