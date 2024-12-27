import React from "react";

function YouTubeSection() {
  return (
    <section className="w-full h-screen bg-black">
      <div className="w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
          title="5BY5 Winner Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default YouTubeSection;
