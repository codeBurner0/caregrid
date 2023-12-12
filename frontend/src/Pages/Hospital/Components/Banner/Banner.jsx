import React from 'react'
import {HiLocationMarker} from 'react-icons/hi';
import './Banner.css'
import back from '../../assets/7.png';
import right from '../../assets/1.png';


const Banner = () => {
  return (
    <section className='banner-wrapper'>
      <div className='banner-container'>
        {/* left side  */}
        <div className='banner-left'>
          
          <div className="banner-title">
            <div className="orange-circle"/>
            <h1>
              Discover <br />
              Most Suitable <br />
              Hospital
            </h1>
          </div>

          <div className="banner-desc">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, deleniti. Perferendis consequatur eos cupiditate ullam commodi optio vel fugit doloribus ratione consequuntur ducimus tenetur numquam minus veniam, magni, dolores delectus sapiente, natus quos. Tenetur expedita quis iusto suscipit quam repellendus sunt molestias similique. Sequi corrupti soluta repellendus beatae, deserunt consectetur!</p>
          </div>

        </div>
        <div className="banner-right">
          <div className='img-container'>
            <img src={right} alt="" />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Banner
