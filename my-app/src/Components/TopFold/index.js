import React from 'react'
import './topFold.css'
import Button from '../../common/Button'
const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
      <div className='tf-heading'>
      Discover Collect, & Sell <span className='heading-gradient'>
      Extraordinary</span> NFTs
      </div>
      <div className='tf-description'> the leading NFT Marketplace on Ethereum Home to the next generation of digital creators, Discover the best NFT collections. </div>
      <div className='tf-left-btns'>
      <Button btnType="PRIMARY" btnText='EXPLORE'/>
      <Button btnType="SECONDARY" btnText='CREATE' customClass='tf-left-secondary-btn'/>
      </div>
      </div>
      <div className='tf-right'>
      <div className='tf-right-diamond'>
      <div className='tf-r-diamond-item absolute-center'>
      <img className='tf-r-diamond-img' alt='diamond-banner'
      src='https://gifsec.com/wp-content/uploads/2022/12/nft-gif-1.gif'/>
      </div>
      <div className='tf-r-diamond-item absolute-center'>
      <img className='tf-r-diamond-img' alt='diamond-banner'
      src='https://preview.redd.it/jsud45laj9x71.png?auto=webp&s=e54ca94661b73d75e4912101aba88bc6756d262d'/>
      </div>
      <div className='tf-r-diamond-item absolute-center'>
      <img className='tf-r-diamond-img' alt='diamond-banner'
      src='https://gifsec.com/wp-content/uploads/2022/12/nft-gif-1.gif'/>
      </div>
      </div>
      </div>
    </div>
  )
}
export default TopFold
