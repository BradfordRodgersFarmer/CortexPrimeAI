import Head from 'next/head';
import Link from 'next/link';

export default function Page(){
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Resume</title>

            </Head>
            <div className="ui container">

                <h1 className="ui dividing header">Resume <Link className="ui button primary" href="/">Home</Link></h1>

                <h2 className="ui header">Skills</h2>
                <p>Experience with the following programming languages and technologies:</p>
                <div className="ui list">
                    <div className="item">Nodejs, Rails, React, Angularjs, BPMN, Serverless, Javascript, Behaviour Driven
                        Development
                    </div>
                    <div className="item">Software Engineering Practices, MySQL, UML Documentation, Python, Ajax, Linux
                    </div>
                    <div className="item">GANT Chart Creation, Agile Methodologies, Cloud Platforms (AWS, GCP, Azure)</div>
                </div>

                <h2 className="ui header">Education</h2>
                <div className="ui list">
                    <div className="item">
                        M.E Computer and Electrical Engineering, Rutgers University, 2011<br/>
                        New Brunswick, New Jersey
                    </div>
                    <div className="item">
                        B.E Computer and Electrical Engineering, Rutgers University, 2007<br/>
                        New Brunswick, New Jersey
                    </div>
                </div>

                <h2 className="ui header">Jobs</h2>
                <div className="ui segments">
                    <div className="ui segment">
                        <p><strong>Principal Software Engineer</strong> - May 2020 to Present</p>
                        <p>The Muse / Fairygod Boss</p>
                        <p>Responsibilities and technologies include Nodejs, React, Nextjs, Nx, Airflow, Google Cloud
                            Functions, Jenkins, Machine Learning Modeling, AWS, GCP. Focused on migrating to NextJs for
                            improved performance and efficiency.</p>
                    </div>
                    <div className="ui segment">
                        <p><strong>Principal Software Engineer</strong> - 2015 to May 2020</p>
                        <p>Shoppable</p>
                        <p>Focus on product development, opsCode/server setup, ensuring technology security and PCI
                            compliance. Technologies used included Rails, Ruby, Nodejs, React, Angularjs, on AWS, Azure, and
                            GCP platforms.</p>
                    </div>
                    <div className="ui segment">
                        <p><strong>Lead Mobile Developer</strong> - 2011-2014</p>
                        <p>Propeller Communications</p>
                        <p>Software engineering and programming with technologies such as iOS, HTML5, Javascript, Unity
                            (C-sharp), PHP. Turned client requests into product features and managed bug reports.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}