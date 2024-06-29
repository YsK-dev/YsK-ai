import Header from '@/components/custom/Header'
import { AtomIcon, Edit, Share2, Github, Linkedin, Bot, Zap, CodeXml, BrainCircuit } from 'lucide-react'
import React from 'react'

function Home() {
    return (
        <div>
            <Header />
            <div>
                {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" width={1200} height={300} /> */}
                <section className="z-50">
                    <div className="py-8 px-4 justify-between mx-auto max-w-screen-xl text-center lg:py-17 lg:px-13">


                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Build Your Resume <span className='text-primary'>With AI</span>
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            Effortlessly Craft a Standout Resume with YsK's AI-Powered Resume Builder
                        </p>
                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-[#0077B5] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Get Started
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Watch video
                            </a>
                        </div>
                        <div className="flex mb-8 sm:flex-row sm:justify-center sm:space-y-0">
                            <h4 className="mb-0 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                                Why I Created This Website?
                            </h4>
                        </div>
                        <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl sm:px-10 xl:px-30 dark:text-gray-400">
                            Firstlly, I planned to create a simple portfolio website using React . However, my passion for working with APIs and developing more complex systems led me to build something more usefull. This website is designed to assist anyone in creating a professional resume effortlessly with the help of the Gemini API.                        </p>

                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                            <span className="font-semibold text-gray-400 uppercase"></span>
                        </div>
                    </div>
                </section>
                <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h2 className="font-bold text-3xl">Who Am I?</h2>
                    <h2 className="text-md text-gray-500">I am a second-year Computer Engineering student and a tech enthusiast with a passionate interest in every facet of the field.

                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
                            <Zap className='h-8 w-8' />
                            <h2 className="mt-4 text-xl font-bold text-black">Electronic&Robotic</h2>
                            <p className="mt-1 text-sm text-gray-600">
                            I love building electronic projects for fun and have extensive experience working with IoT-based systems and autonomous systems. I'm always on the lookout for innovative project ideas, such as smart home automation, drone technology, or AI-powered robotics.
                            </p>
                        </a>
                        <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
                            <CodeXml className='h-8 w-8' />
                            <h2 className="mt-4 text-xl font-bold text-black">Programming</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                I enjoy the power of programming because it allows me to bring my numerous ideas to life. The way programming helps me transform my thoughts into reality is truly amazing. But also hate the bugs :/


                            </p>
                        </a>
                        <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
                            <BrainCircuit className='h-8 w-8' />
                            <h2 className="mt-4 text-xl font-bold text-black">Ai</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                I'm very enthusiastic about being part of the AI revolution that's shaping our century, and I am actively working towards gaining involvement in this field.
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 text-center flex justify-center gap-5">
                        <a href="https://www.linkedin.com/in/yusuf-sertkaya-87888a244/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:text-white hover:bg-gray-200" role="alert" style={{ backgroundColor: '#18b6f4' }}>
                            <span className="text-sm rounded-full text-white px-5 py-2 mr-4" style={{ backgroundColor: '#0072b1' }}>
                                <Linkedin className='h-4 w-5' /> LinkedIn
                            </span>
                            <span className="text-sm text-white font-light">Yusuf Sertkaya</span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/YsK-dev" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert" style={{ backgroundColor: '#18b6f4' }}>
                            <span className="text-sm rounded-full text-white px-5 py-2 mr-4" style={{ backgroundColor: '#2b3137' }}>
                                <Github className='h-4 w-5' /> GitHub
                            </span>
                            <span className="text-sm text-white font-lg">
                                YsK <Bot className='h-4 w-5 flex justify-between' />
                            </span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
