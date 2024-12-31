import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import GradientText from './GradientText'
import CountUp from './CountUp'
import WaveText from './WaveText'
import { BlurText } from "./BlurText";
import { SplitText } from "./SplitText";




const FloatingShapes = () => {
  const shapes = [
    { type: 'circle', className: 'w-4 h-4 bg-purple-400 border-pink rounded-full' },
    { type: 'square', className: 'w-4 h-4 bg-yellow-400 rotate-45' },
    { type: 'triangle', className: 'w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-pink-400' },
    { type: 'dot', className: 'w-2 h-2 bg-blue-400 rounded-full' },
  ];

  return shapes.map((shape, index) => (
    <motion.div
      key={index}
      className={`absolute ${shape.className}`}
      initial={{ 
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        opacity: 0.3,
      }}
      animate={{
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  ));
};

const Example = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState(0);

  const cards = [
    {
      type: "intro",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full"
        >
          <FaWhatsapp className="text-white w-32 h-32 mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">WhatsApp Wrapped 2024</h1>
          <p className="text-lg font-[Helvetic] text-white">From quick updates to deep convos, relive your WhatsApp 2024!</p>
        </motion.div>
      ),
    },
    {
      type: "stats",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mb-4 flex justify-center items-center relative overflow-hidden"
        >
          {/* Floating shapes layer */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <FloatingShapes key={i} />
            ))}
          </div>
          
          {/* Animated rings */}
          <motion.div
            className="absolute w-64 h-64 border-2 border-white/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-48 h-48 border-2 border-white/15 rounded-full"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-80 h-80 border-2 border-white/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Glowing orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm"
              animate={{
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Original text content */}
          <div className="relative z-10">
            <h3 className="heading1 font-dmSerif text-4xl font-semibold text-white text-center">
              From good mornings to late-night rants <br/>
              here's your 2024 chat rewind!
            </h3>
          </div>
        </motion.div>
      ),
    },
    {
      type: "timeline",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mb-4 flex-col"
        >
          <div className="h-1/6 w-full rounded-xl">
            <GradientText
              colors={["#003F26", "#004D2C", "#006E3C", "#007A4D", "#005B3D"]} // Custom gradient colors
              animationSpeed={5} // Custom animation speed in seconds
              showBorder={false} // Show or hide border
              className="p-4 text-4xl font-russo font-semibold " // Add one or more custom classes
            >
              <h1 className="text-5xl">Messages</h1>
              <h2 className="text-5xl">Activity</h2>
            </GradientText>
          </div>
          
          <div className=" w-full mt-20 flex-col text-left justify-start">
          
              <p className="ml-4 p-1 font-bold font-mono text-xl">Adi Sent: <span> </span>  
              <CountUp
                from={0}
                to={8491}
                separator=","
                direction="up"
                duration={.5}
                className="count-up-text"
              />
               <span> </span>msgs </p>
              <p className="ml-4 p-1 font-bold font-mono text-xl">Khushii Sent: 
              <span> </span>  
              <CountUp
                from={0}
                to={10334}
                separator=","
                direction="up"
                duration={.5}
                className="count-up-text"
              />
               <span> </span>msgs </p>
              <p className="ml-4 p-1 font-bold font-mono text-xl">Total messages: 
              <span> </span>  
              <CountUp
                from={0}
                to={18825}
                separator=","
                direction="up"
                duration={.5}
                className="count-up-text"
              />
               <span> </span>msgs </p>
          </div>
          <div className="p-3 w-full mt-12 text-lg font-bold text-black/80">
          <h2>When Khushii speaks, the chat listens - message count says it all!</h2>
          </div>
        </motion.div>
      ),
    }
    ,
    {
      type: "emojis",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Good thing we kept track - because you two have been chatting up a storm!</h2>
        </motion.div>
      ),
    },
    {
      type: "groups",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-start font-semibold text-black/80 gap-5 h-full w-full p-2 mb-4"
        >
          <div className=" w-full">
            <WaveText text="Annual Chat Insights" size={128}/>
          </div>
          <div className=" pl-4 w-full ">
            <h3 className="text-left text-xl mb-4  font-bold">Total Active Days: <span />
            <CountUp
                from={0}
                to={154}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />/366
            </h3>
            <h3 className="text-left text-xl mb-4  font-bold">Average msgs: <CountUp
                from={0}
                to={52}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /><span> msgs</span> <br/> per Active Day <span />
            </h3>
            <h3 className="text-left text-xl  font-bold">Annual Chat Activity: <span></span>
            <CountUp
                from={0}
                to={42}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />%
            </h3>
          </div>
          <div className=" text-md font-bold text-black/80 mt-6">
            <h4>The peak of our conversations - 764 messages on October 23rd. Let's see if we can top that!</h4>
          </div>
          
        </motion.div>
      ),
    },
    {
      type: "media",
      content: (
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full p-4 relative"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-48 h-48 rounded-full bg-green-400/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
    
          <div className="relative z-10">
            <motion.h2 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-6xl font-gummy font-bold text-white mb-4 text-center"
            >
              Emoji Hall of Fame
            </motion.h2>
    
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {/* First Place */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl"
              >
                <div className="bg-white/95 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://em-content.zobj.net/source/apple/354/trophy_1f3c6.png" 
                      alt="First Place Trophy" 
                      className="h-8 w-8 object-contain"
                    />
                    <img 
                      src="https://em-content.zobj.net/source/apple/354/loudly-crying-face_1f62d.png" 
                      alt="Crying Face" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <CountUp
                      from={0}
                      to={2000}
                      className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                    />
                    <p className="text-xs text-gray-600">times used</p>
                  </div>
                </div>
              </motion.div>
    
              {/* Second Place */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 p-1 rounded-xl"
              >
                <div className="bg-white/95 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://em-content.zobj.net/source/apple/354/2nd-place-medal_1f948.png" 
                      alt="Second Place Trophy" 
                      className="h-8 w-8 object-contain"
                    />
                    <img 
                      src="https://em-content.zobj.net/source/apple/354/pensive-face_1f614.png" 
                      alt="Sad Face" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <CountUp
                      from={0}
                      to={402}
                      className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent"
                    />
                    <p className="text-xs text-gray-600">times used</p>
                  </div>
                </div>
              </motion.div>
    
              {/* Third Place */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 p-1 rounded-xl"
              >
                <div className="bg-white/95 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://em-content.zobj.net/source/apple/354/3rd-place-medal_1f949.png" 
                      alt="Third Place Trophy" 
                      className="h-8 w-8 object-contain"
                    />
                    <img 
                      src="https://em-content.zobj.net/source/apple/354/disappointed-face_1f61e.png" 
                      alt="Disappointed Face" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <CountUp
                      from={0}
                      to={168}
                      className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent"
                    />
                    <p className="text-xs text-gray-600">times used</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
    
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mt-3 text-white text-sm"
            >
              Total emojis shared: 4,327
            </motion.p>
          </div>
        </motion.div>
      )
    },
    {
      type: "outro1",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            <BlurText text="2024 in Pixels :" className="custom-class text-2xl " delay={50} /> 
            <BlurText text="Moments Captured," className="custom-class text-3xl" delay={50} />
            <BlurText text="Memories Stored!" className="custom-class text-5xl" delay={50} /> 
          </h2>
        </motion.div>
      ),
    },
    {
      type: "outro",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full p-6 md:p-8 mb-6 bg-gradient-to-br from-emerald-800 via-emerald-900 to-green-950 rounded-2xl shadow-2xl overflow-hidden relative"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-600/10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-emerald-600/10 blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
    
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl md:text-4xl font-roboto font-bold text-white text-center mb-6 md:mb-8 drop-shadow-lg"
          >
            Media Milestones of 2024
          </motion.h2>
    
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {/* Images stat */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/95 rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src="https://em-content.zobj.net/source/apple/354/camera-with-flash_1f4f8.png"
                  alt="Camera"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Images</p>
                  <CountUp
                    from={0}
                    to={198}
                    duration={2}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent"
                  />
                </div>
              </div>
            </motion.div>
    
            {/* Videos stat */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/95 rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src="https://em-content.zobj.net/source/apple/354/video-camera_1f4f9.png"
                  alt="Video"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Videos</p>
                  <CountUp
                    from={0}
                    to={21}
                    duration={2}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent"
                  />
                </div>
              </div>
            </motion.div>
    
            {/* Links stat */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/95 rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center space-x-4 h-16">
                <img 
                  src="https://em-content.zobj.net/source/apple/354/link_1f517.png"
                  alt="Link"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Links</p>
                  <CountUp
                    from={0}
                    to={141}
                    duration={2}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent"
                  />
                </div>
              </div>
            </motion.div>
    
            {/* Docs stat */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/95 rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src="https://em-content.zobj.net/source/apple/354/page-facing-up_1f4c4.png"
                  alt="Document"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Docs</p>
                  <CountUp
                    from={0}
                    to={6}
                    duration={2}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
    
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6 text-emerald-300/90 text-sm font-medium"
          >
            Your Digital Footprint, One Chat at a Time ✨
          </motion.div>
        </motion.div>
      )
    },
    {
      type: "outro",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mb-4 flex justify-center items-center text-center"
        >
          <h2 className="font-bold text-white h-full w-full flex flex-col justify-center items-center">
            <SplitText text="Wait!" className="custom-class text-left text-8xl " delay={50} /> <br />
            <SplitText text="did someone say" className="custom-class text-2xl" delay={50} /> <br />
            <SplitText text="voice notes?" className="custom-class text-6xl" delay={50} /> <br />
            <SplitText text="Let's not" className="custom-class text-3xl" delay={50} /> <br />
            <SplitText text="skip those!" className="custom-class text-5xl" delay={50} />
          </h2>
        </motion.div>
      ),
    },
    {
      type: "voice-note-diaries",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full p-1 text-center rounded-lg shadow-xl bg-gradient-to-br from-purple-100 to-blue-200 mb-4"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-2">
            Voice Note Diaries
          </h2>
          <div className="space-y-4 p-3">
            <motion.div 
              className="flex items-center p-3 rounded-lg shadow-md bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-102 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-1 text-lg font-semibold text-gray-800 text-left">
                Total Voice Notes
              </div>
              <div className="w-32 flex flex-col justify-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <CountUp
                    from={0}
                    to={176}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-xl"
                  />{" "}
                  vn's
                </h3>
              </div>
            </motion.div>
    
            <motion.div 
              className="flex p-3 rounded-lg shadow-md bg-gradient-to-r from-white to-purple-50 hover:from-purple-50 hover:to-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-1 text-lg font-semibold text-gray-800 text-left">
                Total Voice: <br />
                Notes Duration
              </div>
              <div className="w-32 flex flex-col justify-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <CountUp
                    from={0}
                    to={10877}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-xl"
                  />
                </h3>
                <span className="text-md font-medium text-gray-600 whitespace-nowrap">
                  (<CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text font-arial"
                  />hr{" "}
                  <CountUp
                    from={0}
                    to={1}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />min{" "}
                  <CountUp
                    from={0}
                    to={17}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text"
                  />sec)
                </span>
              </div>
            </motion.div>
    
            <motion.div 
              className="flex p-3 rounded-lg shadow-md bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-1 text-lg font-semibold text-gray-800 text-left">
                Average Voice: <br />
                Note Duration
              </div>
              <div className="w-32 flex flex-col justify-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <CountUp
                    from={0}
                    to={61}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span /> sec
                </h3>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className=" text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
          >
            <p className="text-sm font-bold italic p-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              You've spent enough time to binge-watch an entire season of your favorite series!
            </p>
          </motion.div>
        </motion.div>
      ),
    },
    {
      type: "outro",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full p-8 text-center"
        >
        <h2 className="font-bold  text-white text-4xl ">Your words have shaped the discussion - check out your share of the chat!</h2>

        </motion.div>
      ),
    },
    {
      type: "outro",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full p-1 text-center rounded-lg shadow-xl bg-gradient-to-br from-amber-100 to-yellow-100 mb-4"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-yellow-600 p-2">
            Measuring Your Presence
          </h2>
          <div className="space-y-4 p-3 mt-10">
            <motion.div
              className="flex items-center p-3 rounded-lg shadow-md bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-1 text-lg font-semibold text-gray-800 text-left">
                Adi's Contribution:
              </div>
              <div className="w-32 flex flex-col justify-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-800 to-yellow-600 bg-clip-text text-transparent">
                  <CountUp
                    from={0}
                    to={45.1}
                    decimals={1}
                    duration={2}
                    className="count-up-text text-xl"
                  />%
                </h3>
              </div>
            </motion.div>
    
            <motion.div
              className="flex items-center p-3 rounded-lg shadow-md bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-1 text-lg font-semibold text-gray-800 text-left">
                Khushii's Contribution:
              </div>
              <div className="w-32 flex flex-col justify-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-800 to-yellow-600 bg-clip-text text-transparent">
                  <CountUp
                    from={0}
                    to={54.9}
                    decimals={1}
                    duration={2}
                    className="count-up-text text-xl"
                  />%
                </h3>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-14 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
          >
            <p className="text-sm font-bold p-1 italic bg-gradient-to-r from-amber-900 to-yellow-800 bg-clip-text text-transparent">
              You can always count on Khushii to be the Yapper in the room!
            </p>
          </motion.div>
        </motion.div>
      ),
    },
    {
      type: "outro",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mb-4 flex justify-center items-center text-center"
        >
          <h2 className="text-white font-bold text-5xl">Well That Was It Until We Meet Next Year!</h2>
        </motion.div>
      ),
    },
    {
      type: "outro",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mb-4 flex justify-center items-center text-center"
        >
          <h2 className="text-white font-bold text-xl">wait ! A small note from my side :)</h2>
        </motion.div>
      ),
    },
    {
      type: "outro",
      content: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center h-full w-full bg-gradient-to-br from-gray-900 to-purple-900 mb-4 rounded-xl shadow-2xl overflow-hidden"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="w-full bg-black/30 backdrop-blur-sm p-6 mb-4"
          >
            <h2 className="text-3xl font-bold text-white">Happy New Year, Khushii! 🎉</h2>
          </motion.div>
    
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full px-8 pb-6 overflow-y-auto max-h-[70vh] bg-gradient-to-t from-black to-transparent custom-scrollbar"
          >
            <div className="space-y-6 text-white/90">
              <p className="text-md leading-relaxed">
              Happy New Year, Khushii! 🎉 Stay just the way you are—clumsy, adorably sleepy, endlessly lovable, and the purest soul I know. Your cute little quirks, your slay confidence, and your undeniable intelligence all come together to make someone so incredibly special. Honestly, it’s these bits of you that make you, you, and I wouldn’t change a single thing about it. Let’s welcome 2025 with open arms, a fresh start, and loads of positivity. I hope this year is as extraordinary as your ability to make everyone around you feel seen and loved.

              You know, the way you notice even the tiniest details—it’s like you’ve got this magical ability to pick up on what truly matters. And oh, your love for dogs and cats—it’s so genuine, so heartwarming, and yet so effortlessly you. The way your face lights up when you talk about them or see one wandering around, it’s honestly such a joy to witness. It’s a little thing, but it says so much about the kind, intelligent, and beautifully pure soul you are. I truly adore this about you (among a million other things).

              I know how sensitive you are, but hey, no more crying too much, okay? We got this! Here's to a 2025 with fewer tears, more laughter, and the strength to handle whatever comes our way. You are strong, Khushii, and you’ve got a friend you can always rely on. Whenever you need someone, I’ve got your back. We’ll keep sending those good mornings and good nights to each other, just like we always do, keeping everything light and easy.

              And Khushii, you know what’s amazing? I know you’re going to do incredible things in life. I can already see it—you, someday living abroad, building a life that’s so you. The kind of life where you’re thriving on your own terms, making dreams come true, and being the independent, unstoppable person I know you are. You’ll have your cozy home filled with warmth, laughter, and maybe a couple of dogs and cats (of course!), because how could it be complete without them? I wish I could hear all your stories from your abroad life, how your day went, what you experienced—those would be my therapy, honestly. It’s a part of you I’d love to stay connected to, no matter how far you go.

              I’ve been working on this for the last three days—thinking, designing, and putting it all together. Yep, this right here is my way of saying, “Hey, you’re special, and you matter.” I know it’s a little extra, but then again, so am I, right? 😅 And here I am, just a few hours away from midnight, still trying to perfect this for you.

              Hahaha, only 4 hours left till the clock strikes 12, and honestly, I don’t even know how I’m going to wrap this up in time. But you know what? That’s the fun part, isn’t it? Doing something meaningful for someone you care about, even if it means a bit of a rush.

              So here’s to you, Khushii. To all the laughs, the sleepy moments, the good mornings and good nights, the shared love for animals, and all the little things that make you so amazing. You bring so much light into everything you do, and I can’t wait to see where 2025 takes you. You’re destined for great things, and I know this year will only be another step toward achieving everything you’ve ever dreamed of. I’m beyond grateful to have you in my life, and I’ll always be here, rooting for you every step of the way 💞
              </p>
    
              
            </div>
          </motion.div>
    
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )
    }
    
  
  ];

  return (
    <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
      <div className="relative">
        <AnimatePresence mode="wait">
          <TiltCard
            key={currentCard}
            card={cards[currentCard]}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            totalCards={cards.length}
            direction={direction}
            setDirection={setDirection}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

const TiltCard = ({ 
  card, 
  currentCard, 
  setCurrentCard, 
  totalCards,
  direction,
  setDirection
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      // Left half clicked
      if (currentCard > 0) {
        setDirection(-1);
        setCurrentCard(currentCard - 1);
      }
    } else {
      // Right half clicked
      if (currentCard < totalCards - 1) {
        setDirection(1);
        setCurrentCard(currentCard + 1);
      }
    }
  };

  const variants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0
    }),
    center: {
      rotateY: 0,
      opacity: 1
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0
    })
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      custom={direction}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative w-[30vw] h-[80vh] rounded-xl bg-[#25D366] cursor-pointer"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-gradient-to-br from-green-600 to-green-700 shadow-lg flex flex-col justify-center items-center p-6"
      >
        {card.content}
        <p className="absolute bottom-4 text-sm text-white/70">
          Click left half to go back, right half to proceed.
        </p>
      </div>
    </motion.div>
  );
};

export default Example;