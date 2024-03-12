import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import video from "../../assets/videos/video.mp4";
import music from "../../assets/music/trinix.m4a";

function Video() {
    const [videoStatus, setVideoStatus] = useState(<FaPlay className="icon"/>);
    const videoRef = useRef();
    const [musicStatus, setMusicStatus] = useState(<FaPlay className="icon"/>);
    const musicRef = useRef();

    const handleVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setVideoStatus(<FaPause className="icon"/>);
        } 
        else { 
            videoRef.current.pause();
            setVideoStatus(<FaPlay className="icon"/>);
        }
    }

    const handleAudio = () => {
        if (musicRef.current.paused) {
            musicRef.current.play();
            setMusicStatus(<FaPause className="icon"/>);
        }
        else {
            musicRef.current.pause();
            setMusicStatus(<FaPlay className="icon"/>);
        }
    }

    return (
        <>
            <div className="video-container">
                <button onClick={handleVideo} className="controls">
                    {videoStatus}
                </button>
                <video ref={videoRef} src={video}></video>
            </div>
            <div>
                <audio ref={musicRef} src={music}></audio>
                <button onClick={handleAudio}>
                    {musicStatus}
                </button>
            </div>
        </>
    );
}

export default Video;
