import EducatorMenu from "../EducatorMenu";
import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

function LiveClass() {
  const [roomId, setRoomId] = useState("");
  const [peerConnection, setPeerConnection] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  // Function to initialize peer connection
  const initializePeerConnection = async () => {
    const pc = new RTCPeerConnection();

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("iceCandidate", event.candidate, roomId);
      }
    };

    pc.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));

    localVideoRef.current.srcObject = stream;

    setPeerConnection(pc);
  };

  // useEffect to handle socket events
  useEffect(() => {
    socket.on("offer", async (offer) => {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(offer)
      );
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit("answer", answer, roomId);
    });

    socket.on("answer", async (answer) => {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    socket.on("iceCandidate", async (iceCandidate) => {
      await peerConnection.addIceCandidate(new RTCIceCandidate(iceCandidate));
    });

    return () => {
      socket.disconnect();
    };
  }, [peerConnection, roomId]);

  const handleJoinRoom = () => {
    socket.emit("joinRoom", roomId);
    initializePeerConnection();
  };

  const handleStartCall = async () => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("offer", offer, roomId);
  };

  return (
    <div>
      <div className="dashboard">
        <div className="menu">
          <EducatorMenu />
        </div>
        <div className="content">
          <div>
            {/* <input
              placeholder=""
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            /> */}
            <div className="flex flex-col items-center space-y-2">
              <div className="h-[400px] w-[600px] border-[4px] ">
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  className="w-full h-full"
                ></video>
              </div>
              <div className="flex items-end space-x-3">
                <button
                  class="p-2 px-4 rounded-lg bg-blue-600 text-white block "
                  onClick={handleJoinRoom}
                >
                  start class
                </button>
                <button
                  class="p-2 px-4 rounded-lg bg-red-600 text-white block "
                  onClick={handleJoinRoom}
                >
                  End class
                </button>
              </div>
            </div>

            {/* <button onClick={handleStartCall} disabled={!peerConnection}>
              Start Class
            </button> */}
            <div>
              <video
                ref={remoteVideoRef}
                autoPlay
                style={{ width: "600px", height: "400px" }}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveClass;
