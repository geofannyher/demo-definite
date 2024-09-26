const VideoRecorder = ({ videoSrc }: any) => {
  return (
    <>
      <video
        src={videoSrc}
        controls={false}
        className="rounded-lg max-w-xl mx-auto height-large width-large"
        style={{
          width: "600px",
          height: "750px",
          objectFit: "cover",
        }}
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default VideoRecorder;
