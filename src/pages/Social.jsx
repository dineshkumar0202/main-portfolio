import React from "react";
import {
  ExternalLink,
  Users,
  MessageCircle,
  Video,
  Camera,
} from "lucide-react";

import "../App.css"; // <- import the plain CSS here

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      username: "@johndoe",
      description: "Professional network and career updates",
      followers: "5.2K",
      posts: "120",
      icon: Users,
      colorClass: "linkedin",
      url: "#",
      stats: { connections: "3K+", endorsements: "150+", articles: "25" },
    },
    {
      name: "GitHub",
      username: "@johndoe",
      description: "Open source projects and code repositories",
      followers: "850",
      posts: "320",
      icon: Users,
      colorClass: "github",
      url: "#",
      stats: { repos: "120", stars: "850", forks: "200+" },
    },
    {
      name: "Instagram",
      username: "@johndoe.codes",
      description: "Behind the scenes, tech lifestyle, and visual content",
      followers: "3.5K",
      posts: "180",
      icon: Camera,
      colorClass: "instagram",
      url: "#",
      stats: { posts: "180", stories: "500+", reels: "45" },
    },
    {
      name: "Twitter",
      username: "@johndoe_dev",
      description: "Tech thoughts, daily updates, and community engagement",
      followers: "2.8K",
      posts: "450",
      icon: MessageCircle,
      colorClass: "twitter",
      url: "#",
      stats: { tweets: "1.2K", likes: "5K+", retweets: "800+" },
    },
    // {
    //   name: "YouTube",
    //   username: "@JohnDoeCode",
    //   description: "Coding tutorials, tech reviews, and development tips",
    //   followers: "15K",
    //   posts: "85",
    //   icon: Video,
    //   colorClass: "youtube",
    //   url: "#",
    //   stats: { videos: "85", views: "250K+", subscribers: "15K" },
    // },
  ];

  return (
    <div className="social-section">
      <div className="social-container">
        <div className="social-header">
          <h1>Social Links</h1>
          <p>
            Connect with me across different platforms and join the community
          </p>
        </div>

        {socialPlatforms.map((platform, index) => {
          const Icon = platform.icon;

          return (
            <div className="social-card" key={platform.name}>
              <div className="card-left">
                <div className="card-top">
                  <div className={`icon-box ${platform.colorClass}`}>
                    <Icon className="icon" />
                  </div>
                  <div>
                    <h3>{platform.name}</h3>
                    <p className="username">{platform.username}</p>
                  </div>
                  <a href={platform.url} className="external-link">
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="desc">{platform.description}</p>

                <div className="stats-row">
                  <div className="stat">
                    <div className="stat-value">{platform.followers}</div>
                    <div className="stat-label">Followers</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">{platform.posts}</div>
                    <div className="stat-label">Posts</div>
                  </div>
                </div>

                <div className="badges">
                  {Object.entries(platform.stats).map(([key, value]) => (
                    <div className="badge" key={key}>
                      <span>{key}:</span> <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-right">
                <div className={`circle-icon ${platform.colorClass}`}>
                  <Icon className="icon" />
                </div>
              </div>
            </div>
          );
        })}

        <div className="cta">
          <p>Follow me for updates, insights, and behind-the-scenes content</p>
          <div className="cta-buttons">
            {socialPlatforms.map((platform) => (
              <a
                href={platform.url}
                className={`cta-button ${platform.colorClass}`}
                key={platform.name}
              >
                Follow on {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
