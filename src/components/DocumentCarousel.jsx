import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import doc1 from "../assets/images/doc1.png"
import doc2 from "../assets/images/doc2.png"
import doc3 from "../assets/images/doc3.png"
// import doc4 from "../assets/images/doc4.png"

const images = [doc1,doc2,doc3]
// const loopImages = [...images,...images]

// 3 fixed slots (left, center, right)
const slots = [-260, 0, 260]

export default function DocumentCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-105 flex items-center justify-center overflow-hidden">
      <div className="relative w-225 h-full flex items-center justify-center">

        {images.map((img, i) => {
          const diff = (i - index + images.length) % images.length

          if (diff > 2) return null // only render 3 cards

          return (
            <motion.img
              key={i}
              src={img}
              className="absolute w-93"
              animate={{
                x: slots[diff],
                scale: diff === 1 ? 1 : 0.50,
                opacity: diff === 1 ? 1 : 0.35,
                filter: diff === 1 ? "blur(0px)" : "blur(4px)",
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              style={{
                zIndex: diff === 1 ? 10 : 1,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}