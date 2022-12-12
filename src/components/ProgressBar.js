import { motion } from "framer-motion";

const ProgressBar = () => {
  return (
    <div className="mx-auto max-w-[60%] border border-black">
      <motion.div
        initial={{ width: "100%" }}
        style={{
          height: "40px",
          backgroundColor: "lightgray",
          display: "flex",
        }}
      >
        <motion.div
          initial={{ width: "41%" }}
          style={{
            height: "100%",
            backgroundColor: "green",
            marginLeft: "2.77%",
          }}
        />
        <motion.div
          initial={{ width: "8.33%" }}
          style={{
            height: "100%",
            backgroundColor: "yellow",
            marginLeft: "22.222%",
          }}
        />
        <motion.div
          initial={{ width: "5.55%" }}
          style={{
            height: "100%",
            backgroundColor: "red",
            marginLeft: "19.444%",
          }}
        />
      </motion.div>
    </div>
  );
};
//599.76 total time
export default ProgressBar;
