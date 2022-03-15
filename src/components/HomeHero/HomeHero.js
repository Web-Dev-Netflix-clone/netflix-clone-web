import './HomeHero.scss'
import { IconDetail } from '../Icons/IconDetail'
import { IconPlayBlack } from '../Icons/IconPlayBlack'

const HomeHero = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src={require(`../../assets/videos/homehero.mp4`)} />
      </video>

      <div className='hero-description'>
        <div className='title-wrapper'>
          <h2>The Bombardment</h2>
        </div>

        <div className='info-wrapper'>
          <p>
            The fates of several Copenhagen residents collide when a WWII
            bombing mission accidentally targets a school full of children.
          </p>
        </div>

        <div className='button-wrapper'>
          <button className='hero-button play-button'>
            <div className='button-icon'>
              <IconPlayBlack />
            </div>
            <div style={{ width: '1rem' }}></div>
            <span>Play</span>
          </button>

          <button className='hero-button info-button'>
            <div className='button-icon'>
              <IconDetail />
            </div>
            <div style={{ width: '1rem' }}></div>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero