import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 ajrak-pattern opacity-10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-indigo-900 mb-6">
              {translations.about}
            </h1>
            <p className="text-xl text-gray-700">
              Sindhi AI is dedicated to preserving and promoting Sindhi language and culture through modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Sindhi AI was founded with a clear mission: to bridge the gap between traditional Sindhi culture and modern technology. 
              We believe that language is the cornerstone of cultural identity, and by creating AI-powered educational tools in Sindhi, 
              we can help preserve this rich heritage for future generations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our platform offers a unique opportunity for Sindhi speakers to access quality educational content in their native language, 
              while also providing an option for English speakers to learn about Sindhi culture and language.
            </p>
            <p className="text-lg text-gray-700">
              By combining traditional Sindhi design elements like Ajrak patterns and Topi motifs with cutting-edge technology, 
              we create an immersive learning environment that celebrates Sindhi heritage while embracing innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card text-center">
              <div className="w-24 h-24 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">AS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahmed Soomro</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                Educational technologist with a passion for preserving Sindhi language and culture.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="card text-center">
              <div className="w-24 h-24 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">ZM</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zainab Memon</h3>
              <p className="text-gray-600 mb-2">Lead Developer</p>
              <p className="text-gray-600">
                Full-stack developer specializing in educational technology and multilingual applications.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="card text-center">
              <div className="w-24 h-24 ajrak-pattern rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">KL</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Karim Lashari</h3>
              <p className="text-gray-600 mb-2">Content Director</p>
              <p className="text-gray-600">
                Linguist and educator focused on creating engaging educational content in Sindhi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We envision a world where technology serves as a bridge between generations, helping to preserve cultural heritage 
            while empowering communities with modern educational tools. Sindhi AI aims to be at the forefront of this movement, 
            creating innovative solutions that celebrate linguistic diversity and cultural identity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
