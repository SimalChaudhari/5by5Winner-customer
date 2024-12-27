import React from 'react';
import { HeroAboutComponent } from '../components';
import YouTubeSection from '../components/YouTubeSection';
import TrustSection from '../components/TrustSection';
import FAQSection from '../components/FAQSection';

function About() {
    return (
        <div>
            <div className="container mx-auto py-16 text-center px-4">
                <HeroAboutComponent />
            </div>
            <YouTubeSection />
            <TrustSection />
            <FAQSection />
        </div>
    );
}

export default About;