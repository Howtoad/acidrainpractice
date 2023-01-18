import acidraincut1 from "../media/videos/acidraincut1.webm";
const VideoRain = ({ videoRef }) => {
  return (
    <div className="max-w-[600px]">
      <video src={acidraincut1} ref={videoRef} autoPlay></video>
    </div>
  );
};

export default VideoRain;
