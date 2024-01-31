import React, { useState, useEffect } from "react";
import VideoPlayer from "./videoPlayer.js";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../firebase.js";

const Live = () => {
  const [hlsStreamUrl, setHlsStreamUrl] = useState("");
  const [isTrue, setState] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const firestore = firebase.firestore();
    const fetchHLSStreamUrl = async () => {
      try {
        const doc = await firestore.collection("liveLink").doc("mm-tv").get();
        if (doc.exists) {
          setHlsStreamUrl(doc.data().url);
          setState(!isTrue);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchHLSStreamUrl();
    return () => {
      firebase.app().delete();
    };
  }, []);

  if (hlsStreamUrl === "not found") {
    return <h1 style={{marginTop: "300px", textAlign:"center"}}>Data Not Found</h1>;
  } else {
    return <div>{isTrue && <VideoPlayer src={hlsStreamUrl} />}</div>;
  }
};

export default Live;
