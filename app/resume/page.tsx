import Head from 'next/head';
import Link from 'next/link';

export default function Page(){
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Resume</title>

            </Head>
            <div className="ui container">

                <h1 className="ui dividing header">Resume <Link className="ui button primary" href="/">Home</Link></h1>

                <h2 className="ui header">Key Accomplishments</h2>
                <div className="ui list">
                    <div className="item">Saved 150k per year at the Muse by consolidating services after Fairygodboss
                        was acquired by them
                    </div>
                    <div className="item">Improved page speed of Fairygod Boss by 80%
                    </div>
                    <div className="item">Helped design and created the Shoppable Video service which was sold to
                        Unilever and GSK
                    </div>
                    <div className="item">Worked with several large online retailers to integrate their APIs in to our
                        checkout flow
                    </div>
                    <div className="item">Updated Shoppable’s checkout solution to ensure PCI compliance
                    </div>
                    <div className="item">Worked helping junior developers to improve their skills
                    </div>
                </div>
                <div className="item">
                    Graduated with a Masters degree in Computer Engineering
                </div>
            </div>


            <h2 className="ui header">Jobs</h2>
            <div className="ui segments">
                <div className="ui segment">
                    <p><strong>Principal Software Engineer</strong> - May 2020 to Present</p>

                    <p>The Muse / Fairygod Boss</p>
                    <div className="ui list">
                        <div className="item">Responsible for managing the development of new features and new products.
                        </div>

                        <div className="item">Choosing what technologies to use to run the company effectively. By
                            migrating article pages and jobs pages to NextJS
                        </div>
                        <div className="item">Helped save the company 150k per year though consolidation of cloud
                            services
                        </div>
                        <div className="item">Worked both with a professional design team as well as external partners
                            to provide a helpful experience to our users.
                        </div>
                        <div className="item">Improved the email service to help send better personalized emails to
                            improve user retention.
                        </div>
                        <div className="item">The technologies used at this position were NodeJS, React, NextJS, NestJS,
                            NX, Airflow, Google Cloud Functions, Jenkins, Machine Learning Modeling.
                        </div>
                        <div className="item">
                            Cloud platforms used were (AWS, and GCP).
                        </div>
                        <div className="item">
                            Trained junior developers and hiring engineers.
                        </div>
                    </div>

                </div>
                <div className="ui segment">
                    <p><strong>Principal Software Engineer</strong> - 2015 to May 2020</p>
                    <p>Shoppable</p>
                    <div className="ui list">
                        <div className="item">Developed Shoppable Video
                        </div>
                        <div className="item">Setup microservices to run checkout
                        </div>
                        <div className="item">Ensuring security of all of our technologies by ensuring our products were
                            all PCI compliant.
                        </div>
                        <div className="item">Worked with major brands such as GSK and Unilever to design a product that
                            fit their checkout needs across their major brands.
                        </div>
                        <div className="item">Worked with major brands such as Walmart, Target, and Ulta to integrate
                            their APIs into our checkout flow.
                        </div>
                        <div className="item">Working directly with the CEO, in order to determine the direction of the
                            business.
                        </div>
                        <div className="item">Use of BPMN to design the checkout and fulfillment flow.
                        </div>
                        <div className="item">Technologies used at this position were Rails, Ruby, NodeJS, React, BPMN,
                            AngularJS.
                        </div>
                        <div className="item">
                            Cloud platforms used were Azure, AWS, and GCP.
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <p><strong>Lead Mobile Developer</strong> - 2011-2014</p>
                    <p>Propeller Communications</p>
                    <div className="ui list">
                        <div className="item">Created speicalized sales Ipad applications for Johnson and Johnson sales
                            teams
                        </div>
                        <div className="item">Turned clients requests into features in products.
                        </div>
                        <div className="item">Worked closely with the business team at Johnson and Johnson to design
                            products for their sales team
                        </div>
                        <div className="item">Created documentation to pass off to business partners
                        </div>
                        <div className="item">Used the following programming languages: IOS, HTML5, Javascript,
                            Unity(C-sharp), and php .
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="ui header">Skills</h2>
            <div className="ui list">
                <div className="item">
                    Experience with the following programming languages: NodeJS, NextJS, NestJS,
                    Go, Golang Rails, React, AngularJS, BPMN, Servless, Behaviour Driven Development,
                    Software engineering practices, Javascript, Mysql, UML documentation, Python,
                    Ajax, Linux, GANT Chart creation, Agile Methodologies, Cloud platforms, AWS,
                    GCP, Azure, LLAMA 2.
                </div>
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
        </div>
    )
        ;
}