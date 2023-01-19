import acidvideo from "../media/videos/acidrainwithtransparent.webm";
const VideoRain = ({ videoRef }) => {
  return (
    <div className="max-w-[600px]">
      <video src={acidvideo} ref={videoRef} autoPlay></video>
    </div>
  );
};

export default VideoRain;
