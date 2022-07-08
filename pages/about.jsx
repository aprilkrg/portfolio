// special ssr image component
import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
    return(
        <>
            <h1>About</h1>
            <p className={[styles.extraGreen, styles.bigFont].join(" ")}>I am a super cool software engineer now. I make super cool stuff with the codes.</p>
            <div>
                <style jsx>
                    {`
                        .orangeText {
                            color: orange;
                        }
                        p {
                            cont-size: 70px;
                        }
                    `}
                </style>
                <p className="orangeText">I love to code and would love to code for your company!</p>

            </div>
            {/* image loaded locally */}
            <Image 
                src="/weston.png"
                // layout="fill"
                alt="photo of weston"
                width={500}
                height={500}
            />
            <Image 
                src="https://placekitten.com/300/300"
                alt="a cat"
                width={300}
                height={300}
            />
        </>
    )
}