// AboutUs.js

import React from "react";
import vision from "./vision.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our online education platform dedicated to empowering
          students in their journey towards mastering competitive exams like IIT
          and NEET. At the heart of our mission lies a commitment to providing
          top-notch education through innovative technologies, namely React and
          Tailwind CSS, ensuring a seamless and immersive learning experience
          for our students.
        </p>
        <div className="flex flex-wrap flex-col md:flex-row mt-6">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-lg text-gray-600">
              We envision a world where quality education is accessible to all,
              regardless of geographical limitations or socioeconomic barriers.
              Through our platform, we aim to democratize education by offering
              high-quality resources and personalized guidance to every student
              aspiring to excel in their academic pursuits.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 flex justify-center md:justify-end">
            <img className="w-3/4 md:w-1/2 h-auto" src={vision} alt="" />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">
            What Sets Us Apart
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            <ui>
              <li>
                {" "}
                Cutting-Edge Technology: Our platform is built on the latest
                technologies like React and Tailwind CSS, enabling us to deliver
                a modern and intuitive user interface that enhances the learning
                process.
              </li>

              <li>
                {" "}
                Expert Faculty: We have a team of experienced educators and
                subject matter experts who are dedicated to delivering
                comprehensive lessons, personalized mentoring, and constructive
                feedback to our students.
              </li>

              <li>
                {" "}
                Interactive Learning: Learning is not confined to textbooks. Our
                interactive approach encourages student engagement through
                quizzes, simulations, and collaborative activities, fostering a
                deeper understanding of complex concepts.
              </li>

              <li>
                {" "}
                Flexibility and Convenience: With our online platform, students
                have the flexibility to learn at their own pace and convenience,
                eliminating the constraints of traditional classroom settings.
              </li>
            </ui>
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
          <p className="mt-4 text-lg text-gray-600">
            <ui>
              <li>Satish Maurya</li>

              <li> Vinay Kumar</li>

              <li> Ganesh Prajapati</li>
            </ui>
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
          <p className="mt-4 text-lg text-gray-600">
            <ui>
              <li>
                {" "}
                Comprehensive Curriculum: Our courses are structured to cover
                all topics and concepts essential for exam preparation, ensuring
                that students are well-equipped to tackle any challenge.
              </li>

              <li>
                {" "}
                Personalized Learning: We understand that every student is
                unique, which is why we offer personalized learning paths and
                one-on-one mentoring to address individual strengths and
                weaknesses.
              </li>

              <li>
                {" "}
                Performance Analytics: Track your progress with detailed
                performance analytics and personalized insights, allowing you to
                identify areas for improvement and optimize your study strategy.
              </li>

              <li>
                {" "}
                Community Support: Join a vibrant community of like-minded
                students and educators, where you can collaborate, share
                insights, and seek guidance from peers and mentors.
              </li>
            </ui>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
