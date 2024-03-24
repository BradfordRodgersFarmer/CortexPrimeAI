import  Head from 'next/head';
import  Link from 'next/link';
import  Image from 'next/image';
import  Script from 'next/script'

export default function Page() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Bradford Allen Rodgers-Farmer's Portfolio</title>

            </Head>
            <Script src="https://www.tiktok.com/embed.js" strategy="beforeInteractive" />
            <div className="ui container">

                <div className="ui grid">
                    <div className="ui row">

                        <div className="three wide column">
                            <Image src="/headshot.png" alt="Bradford Allen Rodgers-Farmer"
                                   width={150} height={150}
                                   className="ui small circular image"/>
                        </div>

                        <div className="thirteen wide column">
                            <h1 className="ui header nameLabel" >My name is Bradford Allen
                                Rodgers-Farmer</h1>
                            <p>I am a professional software engineer with a master’s degree in computer engineering and business. My
                                passion is developing new tools and business methods to enhance a company's marketability and
                                workflow processes. I also have expertise in PCI security practices. Currently, I am working as a
                                principal software engineer and developer at The Muse formerly Fairygodboss. I would love to hear
                                from you!</p>
                        </div>
                    </div>
                </div>

                <h2 className="ui dividing header">My Resume</h2>
                <p>Here is a link to my resume:</p>
                <Link className="ui button primary" href="/resume">Resume</Link>

                <h2 className="ui dividing header">My Projects</h2>
                <p>Here are links to some of the projects I have worked on:</p>
                <div className="ui list">
                    <div className="item"><Link className="ui button primary" href="/cortexPrimeCreator">Cortex AI NPC Generator</Link></div>
                </div>
                <h2 className="ui dividing header">Companies was a developer for: </h2>
                <div className="ui list">
                    <div className="item"><Link className="ui button primary" href="https://fairygodboss.com">Fairygodboss</Link> : helped to develop their email services, migrated the application over to nextjs , upgraded their jobs page and article pages for web optimization</div>
                </div>
                <div className="ui list">
                    <div className="item"><Link className="ui button primary" href="https://shoppable.com">Shoppable</Link> : helped develop the core technologies behind their checkout systems, worked to make sure all systems were pci comipliant and certified. </div>
                </div>

                <h2 className="ui dividing header">My TikTok Videos</h2>
                <p>Here are links to some of my TikTok videos:</p>
                <div className="ui relaxed list">
                    <div className="item">
                        <iframe
                            src="https://www.tiktok.com/embed/7349690896402763038"
                            style={{maxWidth:'605px', minWidth:'305px', height:'600px'}}
                            allowFullScreen
                            allow="encrypted-media;"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
