import './.css'
import {GumletPlayer} from '@gumlet/react-embed-player'

// import vid from '../../assets/boston-temp-cut-BF7BR693.mp4'

function Video() {
  return (
    <div className="overflow-hidden flex flex-col items-center pb-[25vh] bg-cool">
      <div className="video_container">
        {/* <GumletPlayer
          videoID="6960b9b9525cbb355622b6c4"
          className="video_container"
          autoplay
          // preload
          muted
          loop
          disable_player_controls
          enabled_player
        /> */}
        <video
          src={'https://daghvm4jxqkzu.cloudfront.net/VP34+EIFS+Sep+24+DJI+0667+%5Bo1dcBgqcj2E%5D.mkv'}
          autoPlay
          muted
          loop
          // controls
        />
      </div>
    </div>
  )
}

export default Video