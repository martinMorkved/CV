import React from 'react';

function Footer() {
    const socialLinks = [
        { platform: "linkedin", url: "https://linkedin.com/in/yourprofile" },
        { platform: "github", url: "https://github.com/yourprofile" },
        { platform: "twitter", url: "https://twitter.com/yourprofile" }
    ];

    return (
        <footer>
            <div className="container">
                <div className="social-links">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`fab fa-${social.platform}`}></i>
                        </a>
                    ))}
                </div>
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer; 