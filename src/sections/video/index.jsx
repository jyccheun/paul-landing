import './.css'

import vid from '../../assets/boston-temp-cut-BF7BR693.mp4'

function Video() {
  return (
    <div className="overflow-hidden flex flex-col items-center pb-[25vh] bg-cool">
      <div className="video_container">
        <video src={vid} type="video/mp4" autoPlay muted />
      </div>
    </div>
  )
}

export default Video