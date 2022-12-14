import { motion } from "framer-motion";

const ProgressBar = ({ existingKeys, listening }) => {
  return (
    <>
      <div className="mx-auto max-w-[60%] flex">
        <p className="text-white ml-[-5px]">1</p>
        <p className="text-white ml-[2.77%]">3</p>
        <p className="text-white ml-[61%]">3</p>
        <p className="text-white ml-[26%]">3</p>
      </div>
      <div className="mx-auto max-w-[60%] border border-black">
        <motion.div
          initial={{ width: "100%" }}
          style={{
            height: "40px",
            backgroundColor: "transparent",
            display: "flex",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ width: "0%" }}
            style={{
              height: "40px",
              backgroundColor: "#00000030",
              display: "flex",
              position: "absolute",
            }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.59976 }}
          ></motion.div>
          <motion.div
            initial={{ width: "38.88%" }}
            style={{
              height: "100%",
              backgroundColor: "#008000",
              marginLeft: "2.77%",
            }}
          />
          <motion.div
            initial={{ width: "8.33%" }}
            style={{
              height: "100%",
              backgroundColor: "#008000",
              marginLeft: "25%",
            }}
          />
          <motion.div
            initial={{ width: "5.55%" }}
            style={{
              height: "100%",
              backgroundColor: "#008000",
              marginLeft: "19.444%",
            }}
          />
        </motion.div>
      </div>
    </>
  );
};
//599.76 total time
export default ProgressBar;
