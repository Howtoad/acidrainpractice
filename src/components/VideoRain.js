import acidvideo from "../media/videos/test2.webm";
const VideoRain = ({ videoRef }) => {
  return (
    <div className="max-w-[60%]">
      <video src={acidvideo} ref={videoRef} autoPlay></video>
    </div>
  );
};

export default VideoRain;
