import React, { useEffect } from "react";
import "./style/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import image1 from "../assets/stats-bg.jpg";
import AOS from 'aos';
import GLightbox from 'glightbox';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import PureCounter from "@srexi/purecounterjs";
function Aboutus() {
    useEffect(() => {
        // Initialize PureCounter here
        new PureCounter();

        // Other initialization code...
    }, []);    useEffect(() => {
        // Preloader removal
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.addEventListener('load', () => preloader.remove());
        }

        // Initialize AOS
        AOS.init();

        // Initialize GLightbox
        const glightbox = GLightbox({ selector: '.glightbox' });

        // PureCounter initialization if needed
        // new PureCounter(); // Assuming PureCounter is properly imported or globally available

    }, []);

    return (
        <main style={{ marginTop: "5%" }}>

            <section id="about" class="about">

                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row align-items-xl-center gy-5">

                        <div class="col-xl-5 content">
                            <h3>About Streamline</h3>
                            <h2>Streamline: Your Project Management Solution</h2>
                            <p>Streamline is dedicated to assisting you in managing your projects efficiently. Our platform is designed to streamline the project management process, making it more accessible, organized, and manageable. Whether you're tackling a small project or orchestrating a large-scale operation, Streamline offers the tools and insights necessary to ensure success. Our intuitive interface and comprehensive features allow for a streamlined system that simplifies project tracking, team collaboration, and deadline management. With Streamline, you're not just managing projects; you're setting the stage for unparalleled success and productivity.</p>
                            <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                        </div>

                        <div class="col-xl-7">
                            <div class="row gy-4 icon-boxes">

                                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="icon-box">
                                        <i class="bi bi-buildings"></i>
                                        <h3>Efficient Management</h3>
                                        <p>Empower your team with tools designed for success. Streamline enhances your ability to manage tasks effectively and efficiently.</p>
                                    </div>
                                </div>

                                <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div class="icon-box">
                                        <i class="bi bi-clipboard-pulse"></i>
                                        <h3>Project Insight</h3>
                                        <p>Gain valuable insights into your project's progress with real-time updates and comprehensive reports.</p>
                                    </div>
                                </div>

                                <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                    <div class="icon-box">
                                        <i class="bi bi-command"></i>
                                        <h3>Collaborative Workspace</h3>
                                        <p>Streamline fosters collaboration, enabling your team to communicate effectively and share resources seamlessly.</p>
                                    </div>
                                </div>

                                <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                    <div class="icon-box">
                                        <i class="bi bi-graph-up-arrow"></i>
                                        <h3>Measurable Success</h3>
                                        <p>Track your project's success with measurable metrics designed to highlight progress and areas for improvement.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section id="stats" class="stats">

                <img src={image1} alt="" data-aos="fade-in" />

                <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

                    <div class="row gy-4">

                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item text-center w-100 h-100">
                            <span class="purecounter" data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1">0</span>
                                <p>Clients</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Team Members</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </main>
);
    }
    export default  Aboutus;