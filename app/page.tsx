import  Head from 'next/head';
import  Link from 'next/link';
import  Image from 'next/image';

export default function Page() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Bradford Allen Rodgers-Farmer's Portfolio</title>

                    <script async src="https://www.tiktok.com/embed.js"></script>
            </Head>
            <div className="ui container">

                <div className="ui grid">
                    <div className="ui row">

                        <div className="three wide column">
                            <Image src="/headshot.png" alt="Bradford Allen Rodgers-Farmer"
                                   width={150} height={150}
                                   className="ui small circular image"/>
                        </div>

                        <div className="thirteen wide column">
                            <h1 className="ui header" style={{paddingTop: '60px'}}>My name is Bradford Allen
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
                <Link className="ui button" href="/resume">Resume</Link>

                <h2 className="ui dividing header">My Projects</h2>
                <p>Here are links to some of the projects I have worked on:</p>
                <div className="ui list">
                    <div className="item"><Link className="ui button" href="/cortexPrimeCreator">Cortex AI NPC Generator</Link></div>
                </div>

                <h2 className="ui dividing header">My TikTok Videos</h2>
                <p>Here are links to some of my TikTok videos:</p>
                <div className="ui relaxed list">
                    <div className="item">
                        <blockquote className="tiktok-embed"
                                    cite="https://www.tiktok.com/@truebelvira/video/7344485963726376222"
                                    data-video-id="7344485963726376222" style={{maxWidth:'605px', minWidth:'305px'}}>
                            <section>
                                <a target="_blank" title="@truebelvira"
                                   href="https://www.tiktok.com/@truebelvira?refer=embed">@truebelvira</a> Bias in large
                                language models
                                <a title="llm" target="_blank"
                                   href="https://www.tiktok.com/tag/llm?refer=embed">#llm</a>
                                <a title="ai" target="_blank" href="https://www.tiktok.com/tag/ai?refer=embed">#ai</a>
                                <a title="largelanguagemodels" target="_blank"
                                   href="https://www.tiktok.com/tag/largelanguagemodels?refer=embed">#largelanguagemodels</a>
                                <a title="chatgpt" target="_blank"
                                   href="https://www.tiktok.com/tag/chatgpt?refer=embed">#chatgpt</a>
                                <a target="_blank" title="♬ original sound - Belvira farmer"
                                   href="https://www.tiktok.com/music/original-sound-7344486109294529310?refer=embed">♬
                                    original sound - Belvira farmer</a>
                            </section>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};
