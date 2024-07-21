import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow from "../assets/red-arrow.svg";
import trophy from "../assets/icon-trophy.png";
import slider1 from "../assets/header/head1.jpg";
import slider2 from "../assets/header/head2.jpg";
import slider3 from "../assets/header/head3.jpg";
import slider4 from "../assets/header/head4.jpg";
import service1 from "../assets/services/service1.png";
import service2 from "../assets/services/service2.png";
import service3 from "../assets/services/service3.png";
import service4 from "../assets/services/service4.png";
import man1 from "../assets/people/man1.png";
import man2 from "../assets/people/man2.png";
import man3 from "../assets/people/man3.png";
import man4 from "../assets/people/man4.png";
import man5 from "../assets/people/man5.png";
import iconplus from "../assets/icon-plus.png";
import iconmin from "../assets/icon-min.png";
import companies from "../assets/companies.png";
import linkedin from "../assets/linkedin.png";
import freelancers from "../assets/freelancers.png";
import iconclass from "../assets/icon-class.png";
import fivestars from "../assets/fivestars.png";
import teamNiccolo from "../assets/team/niccolo.png";
import teamAndrea from "../assets/team/andrea.png";
import team1 from "../assets/team/member1.png";
import team2 from "../assets/team/member2.png";
import team3 from "../assets/team/member3.png";
import team4 from "../assets/team/member4.png";
import ucbackground1 from "../assets/texture-bg-1.jpg";
import ucbackground2 from "../assets/texture-bg-2.jpg";
import ucbackground3 from "../assets/texture-bg-3.jpg";
import uccompany1 from "../assets/usecases/logo1.png";
import uccompany2 from "../assets/usecases/logo2.png";
import uccompany3 from "../assets/usecases/logo3.png";
import ucbanner1 from "../assets/usecases/uc1.jpeg";
import ucbanner2 from "../assets/usecases/uc2.jpg";
import ucbanner3 from "../assets/usecases/uc3.jpg";


const Home = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const services = [ {
        serviceName: 'Sales Proposal', 
        img: service1,
        serviceTitle: 'Close More Deals with Winning Sales Proposals', 
        description: 'We work closely with you to understand your prospect\'s unique challenges and goals.',
      },
      {
        serviceName: 'Investor Pitch Decks', 
        img: service2,
        serviceTitle: 'Secure Funding with Captivating Pitch Decks', 
        description: 'Secure investment with a compelling pitch deck tailored to resonate with investors.',
      },
      {
        serviceName: 'Business Plans', 
        img: service3,
        serviceTitle: 'Chart Your Course to Success', 
        description: 'Develop an actionable business plan to secure and guide your growth strategy, and achieve your long-term goals.',
      },
      {
        serviceName: 'Educational Materials', 
        img: service4,
        serviceTitle: 'Educate and Engage Your Audience', 
        description: 'Develop clear, concise, and visually appealing  materials to empower your audience.',
      },
      {
        serviceName: 'Business Presentations', 
        img: service4,
        serviceTitle: 'Engage Your Audience', 
        description: 'Transform complex information into clear and persuasive presentations.',
      },
      {
        serviceName: 'Company Templates', 
        img: service1,
        serviceTitle: 'Streamline Your Workflow', 
        description: 'Maintain brand consistency with a library of professional company templates.',
      },
      {
        serviceName: 'Logo Design', 
        img: service2,
        serviceTitle: 'Make a Lasting Impression', 
        description: 'Develop a unique and memorable logo that embodies your brand essence and set strong foundations.',
      },
      {
        serviceName: 'Company Branding', 
        img: service3,
        serviceTitle: 'Build a Strong Brand Identity that Stands Out', 
        description: 'Develop a unique  brand identity that resonates with your target audience.',
      },
    ];

    const testimonies = [
        {
            name: 'Ethan Caldwell',
            role: 'CEO',
            comment: 'ProSlider team was amazing. Very detailed, creative and professional. Highly recommended for any PPT creation or rework. When you need quality, don\'t hesitate to call them.',
            img: man1
        },
        {
            name: 'Lara Kensington',
            role: 'StartUp Leader',
            comment: 'Working with ProSlider have been truly a breeze. They go above and beyond the limits of the project in order to make sure that everything is taken care of.',
            img: man2
        },
        {
            name: 'Maya Patel',
            role: 'Marketing Manager',
            comment: 'ProSlider level of knowledge in consulting and management work is impressive and gives the confidence to depend that your task/project will be completed with highest levels of standards.',
            img: man3
        },
        {
            name: 'Carlos Rivera',
            role: 'Sales Manager',
            comment: 'ProSlider helped me develop a fantastic pitch deck, both from design and content perspective. Professionalism, quality and high responsiveness. Everything I wished for. Thanks!',
            img: man4
        },
        {
            name: 'Sophia Montgomery',
            role: 'Sales Director',
            comment: 'ProSlider team understood immediately what my company needed and got it to us within 24 hours. Amazing work, hope to work with their team again.',
            img: man5
        }
    ];

    const team = [
        {
            name: 'Noah',
            comment: 'A tech-savvy designer focused on UX/UI, Noah has redefined online presences for startups and established businesses alike through insightful website proposals.',
            img: team1
        },
        {
            name: 'Sophia',
            comment: 'With over a decade at top design firms, Sophia specializes in transformative business and sales proposal redesigns that drive action and results.',
            img: team2
        },
        {
            name: 'John',
            comment: 'His keen eye for design and deep understanding of visual storytelling ensures that every ProSlider presentation captivates and engages audiences.',
            img: team3
        },
        {
            name: 'Emily',
            comment: 'Emily is a seasoned UI designer with a passion for creating intuitive and aesthetically pleasing user interfaces.',
            img: team4
        },
        {
            name: 'Emily',
            comment: 'Emily is a seasoned UI designer with a passion for creating intuitive and aesthetically pleasing user interfaces.',
            img: team4
        },
    ];

    const [toggleCardBackIndex, setToggleCardBackIndex] = useState(-1);

    const handleToggleCard = (index) => () =>
        toggleCardBackIndex == index? setToggleCardBackIndex(-1) : setToggleCardBackIndex(index);
        
    return (
        <div>
            <div className="home-masthead">
                <div className="slider-container">
                    <Slider {...sliderSettings}>
                        <div>
                            <img src={slider1} alt="Slider image" />
                        </div>
                        <div>
                            <img src={slider2} alt="Slider image" />
                        </div>
                        <div>
                            <img src={slider3} alt="Slider image" />
                        </div>
                        <div>
                            <img src={slider4} alt="Slider image" />
                        </div>
                    </Slider>
                </div>
                <div className="mast-float-right">Unlocking your true potential through <br></br>graphic design for business</div>
                <div className="mast-headline">
                    <h1>Where Design <br></br>Meets Strategy</h1>
                    <div className="flex mast-headline-small"><img src={trophy} alt="Trophy" /> an award winning creative agency</div>
                </div>
            </div>
            <section className="container home-services">
                <div className="flex section-head">
                    <h2>OUR SERVICES</h2>
                    <button className="book-call">Book a call <img src={arrow} alt="Arrow" /></button>
                </div>
                <div className="section-body">
                {
                    services.map(function(item, index) {
                    return (
                        <div class={
                            "flip-card " +
                            (toggleCardBackIndex == index? "toggle-back " : " ")} key={index}>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={item.img} alt="Service" className="service-front-img"/>
                                    <div className="flip-card-front-action">
                                        <span className="subtitle">{item.serviceName}</span>
                                        <img src={iconplus} alt="Detail icon" className="card-detail" onClick={handleToggleCard(index)}/>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flip-card-back-text'>
                                        <small>{item.serviceName}</small>
                                        <div className="subtitle">{item.serviceTitle}</div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="flip-card-back-action">
                                        <div className='service-quote'>ASK FOR A QUOTE</div>
                                        <img src={iconmin} alt="Detail icon" className="card-detail" onClick={handleToggleCard(index)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </section>

            <section className='container home-companies'>
                <div className='subtitle-thin'>OUR TEAM HAS WORKED FOR THE BEST IN THE WORLD</div>
                <img src={companies} alt='Companies' />
            </section>

            <section className='home-achievements'>
                <div id='linkedin' className='achi-block'>
                    <img src={linkedin} alt='LinkedIn' />
                    <div className='subtitle bold-red'>Fastest Growing</div>
                    <div className='description'>Presentation design firm on Linked in</div>
                </div>
                <div id='feedback' className='achi-block'>
                    <div className='stars'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <img src={freelancers} alt='Freelancer sites' className='achi-freelance-sites'/>
                    <div className='description'>Average feedback received</div>
                </div>
                <div id='slides' className='achi-block'>
                    <div className='counter'>
                        <img src={iconclass} alt='Icon class' />
                        <span>11,111</span>
                    </div>
                    <div className='subtitle bold-red'>World-Class slides</div>
                    <div className='description'>designed this year till date</div>
                </div>
            </section>

            <section className='home-testimonies'>
                <div className='inner'>
                {
                    testimonies.map(function(item, index) {
                    return (
                        <div className='testimony-item'>
                            <div className='flex person-data'>
                                <img src={item.img} alt='Person' className='person-img'/>
                                <div className='flex flex-col'>
                                    <img src={fivestars} alt='Stars' className='stars'/>
                                    <div className='person-name'>{item.name}</div>
                                    <div className='person-role'>{item.role}</div>
                                </div>
                            </div>
                            <div className='person-comment description'>
                            "{item.comment}"</div>
                        </div>
                    )
                })}
                </div>
            </section>

            <section className='container home-team'>
                <div className='section-head'>
                    <h2>THE FOUNDERS</h2>
                </div>
                <div className='section-body'>
                    <div className='flex team-upper'>
                        <div className='flex item'>
                            <img src={teamNiccolo} alt='Niccolo' className='team-img'/>
                            <div className='flex flex-col item-desc'>
                                <div className='subtitle'>Niccolo Florenzano</div>
                                <div className='description'>Strategy and operations consulting, 10+ years of experience across EU and Middle East. MSc in Industrial Engineer, MSc in Finance and Management.</div>
                                <div className='book-call'>Book a call <img src={arrow} alt="Arrow" /></div>
                            </div>
                        </div>
                        <div className='flex item'>
                            <img src={teamAndrea} alt='Andrea' className='team-img'/>
                            <div className='flex flex-col item-desc'>
                                <div className='subtitle'>Andrea Saponaro</div>
                                <div className='description'>Strategy & M&A consulting,  10+ years of experience focused on strategy and M&A across UK, US, Saudi, UAE, Italy. MSc in Mechanical Engineering.</div>
                                <div className='book-call'>Book a call <img src={arrow} alt="Arrow" /></div>
                            </div>
                        </div>
                    </div>

                    <div className='subtitle-thin'>THE TEAM</div>
                    <div className='team-lower'>
                        <div className='flex inner'>
                        {
                            team.map(function(item, index) {
                            return (
                                <div className='flex team-item'>
                                    <img src={item.img} alt='Person' className='team-img'/>
                                    <div className='flex flex-col'>
                                        <div className='subtitle team-name'>{item.name}</div>
                                        <div className='description team-description'>{item.comment}</div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className='home-uc'>
                <div className='container'>
                    <div className="flex section-head">
                        <h2>USE CASES</h2>
                        <button className="book-call">Book a call <img src={arrow} alt="Arrow" /></button>
                    </div>
                </div>
                <div className='flex uc-group' style={{backgroundImage: `url(${ucbackground1})`}}>
                    <img src={uccompany1} alt="Logo company" className='uc-company'/>
                    <div className='uc-content'>
                        <img src={ucbanner1} alt='Use case banner' />
                        <div className='flex uc-text'>
                            <div className='subtitle'>COMPANY NAME</div>
                            <div className='description'>
                                Our project, named "InnovateX", is a cutting-edge platform designed to streamline your workflow and boost productivity. With a user-friendly interface and powerful features, InnovateX is your go-to solution for all your project management needs
                            </div>
                            <div className='sales'>53% Increased sales</div>
                        </div>
                    </div>
                </div>

                <div className='flex uc-group' style={{backgroundImage: `url(${ucbackground2})`}}>
                    <img src={uccompany2} alt="Logo company" className='uc-company'/>
                    <div className='uc-content'>
                        <img src={ucbanner2} alt='Use case banner' />
                        <div className='flex uc-text'>
                            <div className='subtitle'>COMPANY NAME</div>
                            <div className='description'>
                                Our project, named "InnovateX", is a cutting-edge platform designed to streamline your workflow and boost productivity. With a user-friendly interface and powerful features, InnovateX is your go-to solution for all your project management needs.
                            </div>
                            <div className='sales'>53% Increased sales</div>
                        </div>
                    </div>
                </div>

                <div className='flex uc-group' style={{backgroundImage: `url(${ucbackground3})`}}>
                    <img src={uccompany3} alt="Logo company" className='uc-company'/>
                    <div className='uc-content'>
                        <img src={ucbanner3} alt='Use case banner' />
                        <div className='flex uc-text'>
                            <div className='subtitle'>COMPANY NAME</div>
                            <div className='description'>
                                Our project, named "InnovateX", is a cutting-edge platform designed to streamline your workflow and boost productivity. With a user-friendly interface and powerful features, InnovateX is your go-to solution for all your project management needs.
                            </div>
                            <div className='sales'>53% Increased sales</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    
    );

  };
  
  export default Home;