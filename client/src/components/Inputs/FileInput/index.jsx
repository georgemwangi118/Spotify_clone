import React, { useRef, useState } from "react";
import Button from "../../Button/Button";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const FileInput = ({
  name,
  label,
  value,
  icon,
  type,
  handleInputState,
  ...rest
}) => {
  const inputRef = useRef();
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  // const handleUpload = () => {
  //   setProgressShow(true);
  //   const fileName = new Date().getTime() + value.name;
  //   const storageRef = ref(
  //     storage,
  //     type === "audio" ? `/audio/${fileName}` : `/images/${fileName}`
  //   );
  //   const uploadTask = uploadBytesResumable(storageRef, value);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const uploaded = Math.floor(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(uploaded);
  //     },
  //     (error) => {
  //       console.log(error);
  //       toast.error("An error occurred while uploading!");
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  // 				handleInputState(name, url);
  // 			});
  //     }
  //   );
  // };

  return (
    <div className={styles.container}>
      <input
        type="file"
        ref={inputRef}
        onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
        value={value}
        {...rest}
      />
      <Button
        style={{
          width: "15rem",
        }}
        onClick={() => inputRef.current.click()}
        label={label}
      />
      {type === "image" && value && (
        <img
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          alt="file"
        />
      )}
      {type === "audio" && value && (
        <audio
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          controls
        />
      )}

      {value !== null && !progressShow && typeof value !== "string" && (
        <Button label="Upload" style={{ width: "10rem" }} />
      )}
      {progressShow && progress < 100 && (
        <div className={styles.progress_container}>
          <CircularProgress
            className={styles.progress}
            variant="determinate"
            value={progress}
          />
          <p>{progress}%</p>
        </div>
      )}
      {progress === 100 && (
        <div className={styles.progress_container}>
          <CheckCircle className={styles.success} />
        </div>
      )}
    </div>
  );
};

export default FileInput;
