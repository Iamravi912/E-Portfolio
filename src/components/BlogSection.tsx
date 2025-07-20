import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "Running Selenium Tool Tests in Docker: A Beginner-Friendly Guide",
      excerpt: "A step-by-step guide for beginners to run Selenium tests inside Docker containers, making browser automation easy and portable.",
      date: "2024-04-10",
      author: "Ravi Gupta",
      readTime: "7 min read",
      category: "Testing & Docker",
      color: "#FFC107",
      link: "https://medium.com/@ravi9991ct/running-selenium-tool-tests-in-docker-a-beginner-friendly-guide-f28ce8b46ae8"
    },
    {
      title: "How Companies Are Leveraging Docker: Real-World Case Studies",
      excerpt: "Discover how leading companies are using Docker to revolutionize their development workflows, deployment strategies, and infrastructure management with practical examples.",
      date: "2024-04-05",
      author: "Ravi Gupta",
      readTime: "8 min read",
      category: "DevOps",
      color: "#00FFFF",
      link: "https://medium.com/@ravi9991ct/how-companies-are-leveraging-docker-real-world-case-studies-f3d46c5c8efb"
    },
    {
      title: "Setting Up Docker Inside Docker (DinD) Using Official Docker-in-Docker Image",
      excerpt: "A step-by-step guide to running Docker inside Docker using the official DinD image, with practical use cases and caveats.",
      date: "2023-12-15",
      author: "Ravi Gupta",
      readTime: "7 min read",
      category: "DevOps",
      color: "#00BFFF",
      link: "https://medium.com/@ravi9991ct/setting-up-docker-inside-docker-dind-using-official-docker-in-docker-image-01909d86c4f4"
    },
    {
      title: "Creating a Git Repository and Pushing to GitHub: A Step-by-Step Guide",
      excerpt: "Learn how to initialize a Git repository, add files, commit changes, and push your code to GitHub with this beginner-friendly tutorial.",
      date: "2023-12-10",
      author: "Ravi Gupta",
      readTime: "6 min read",
      category: "Git & GitHub",
      color: "#24292F",
      link: "https://medium.com/@ravi9991ct/creating-a-git-repository-and-pushing-to-github-a-step-by-step-guide-d5b279d0d5e6"
    },
    {
      title: "Python code to post on Linkedin",
      excerpt: "A simple Python script to automate posting content on LinkedIn, including authentication and API usage.",
      date: "2023-11-28",
      author: "Ravi Gupta",
      readTime: "4 min read",
      category: "Python Automation",
      color: "#0077B5",
      link: "https://medium.com/@ravi9991ct/python-code-to-post-on-linkedin-14d166d6f472"
    },
    {
      title: "Python menu to run various commands",
      excerpt: "Create a Python-based menu system to execute different system commands interactively from the terminal.",
      date: "2023-11-20",
      author: "Ravi Gupta",
      readTime: "5 min read",
      category: "Python Scripts",
      color: "#FFD700",
      link: "https://medium.com/@ravi9991ct/python-menu-to-run-various-commands-ae86a66d8b97"
    },
    {
      title: "Python code to post on twitter, Facebook, and instagram",
      excerpt: "Automate your social media posts across Twitter, Facebook, and Instagram using Python scripts and APIs.",
      date: "2023-11-10",
      author: "Ravi Gupta",
      readTime: "6 min read",
      category: "Python Automation",
      color: "#1DA1F2",
      link: "https://medium.com/@ravi9991ct/python-code-to-post-on-twitter-facebook-and-instagram-5aa26452cd2b"
    },
    {
      title: "Modify the icon or emblem of any Linux software.",
      excerpt: "A practical guide to customizing the icons or emblems of Linux applications for a personalized desktop experience.",
      date: "2023-10-30",
      author: "Ravi Gupta",
      readTime: "3 min read",
      category: "Linux Tips",
      color: "#228B22",
      link: "https://medium.com/@ravi9991ct/modify-the-icon-or-emblem-of-any-linux-software-569351dfef2d"
    },
    {
      title: "How I Built a Python App to Post on LinkedIn Using Streamlit and OAuth2",
      excerpt: "A developer's journey building a Streamlit app for posting on LinkedIn, covering OAuth2 authentication and API integration.",
      date: "2023-10-15",
      author: "Ravi Gupta",
      readTime: "8 min read",
      category: "Python & Streamlit",
      color: "#FF4500",
      link: "https://medium.com/@ravi9991ct/how-i-built-a-python-app-to-post-on-linkedin-using-streamlit-and-oauth2-fbbe6a21a7cf"
    },
    {
      title: "Automating WhatsApp Messaging with Python — Real-World Use Case!",
      excerpt: "Explore how to automate WhatsApp messages using Python for real-world applications, including setup and code examples.",
      date: "2023-10-01",
      author: "Ravi Gupta",
      readTime: "7 min read",
      category: "Python Automation",
      color: "#25D366",
      link: "https://medium.com/@ravi9991ct/automating-whatsapp-messaging-with-python-real-world-use-case-f9139141ec64"
    },
    // NEW BLOGS ADDED
    {
      title: "Contributing to Open Source: A Step-by-Step Guide to Forking, Cloning, and Creating a Pull Request…",
      excerpt: "A comprehensive guide to making your first open source contribution, from forking a repo to submitting a pull request.",
      date: "2024-04-22",
      author: "Ravi Gupta",
      readTime: "9 min read",
      category: "Open Source",
      color: "#43A047",
      link: "https://medium.com/@ravi9991ct/contributing-to-open-source-a-step-by-step-guide-to-forking-cloning-and-creating-a-pull-request-2d72dc7aeebe"
    },
    {
      title: "Creating a Git Repository and Pushing to GitHub: A Step-by-Step Guide",
      excerpt: "Learn how to initialize a Git repository, add files, commit changes, and push your code to GitHub with this beginner-friendly tutorial.",
      date: "2023-12-10",
      author: "Ravi Gupta",
      readTime: "6 min read",
      category: "Git & GitHub",
      color: "#24292F",
      link: "https://medium.com/@ravi9991ct/creating-a-git-repository-and-pushing-to-github-a-step-by-step-guide-6de4504792c6"
    },
    {
      title: "How to Fetch Your Last Email from Gmail Using JavaScript and the Gmail API",
      excerpt: "Step-by-step instructions to fetch your latest email from Gmail using JavaScript and the Gmail API.",
      date: "2024-04-20",
      author: "Ravi Gupta",
      readTime: "7 min read",
      category: "JavaScript & APIs",
      color: "#EA4335",
      link: "https://medium.com/@ravi9991ct/how-to-fetch-your-last-email-from-gmail-using-javascript-and-the-gmail-api-2b77b548c56a"
    },
    {
      title: "How to Record a Video in the Browser and Send It via Email Using EmailJS",
      excerpt: "Learn how to record a video in your browser and send it via email using EmailJS, with code examples.",
      date: "2024-04-19",
      author: "Ravi Gupta",
      readTime: "8 min read",
      category: "Web Development",
      color: "#1976D2",
      link: "https://medium.com/@ravi9991ct/how-to-record-a-video-in-the-browser-and-send-it-via-email-using-emailjs-eeed87dcea61"
    },
    {
      title: "Run VLC Media Player Inside Docker with GUI — Complete Step-by-Step Guide",
      excerpt: "A complete guide to running VLC Media Player inside a Docker container with GUI support.",
      date: "2024-04-17",
      author: "Ravi Gupta",
      readTime: "10 min read",
      category: "Docker & GUI",
      color: "#FF5722",
      link: "https://medium.com/@ravi9991ct/run-vlc-media-player-inside-docker-with-gui-complete-step-by-step-guide-110738b57d44"
    },
    {
      title: "5 Popular GUI Programs in Linux and the Terminal Commands Behind Them",
      excerpt: "Explore the most popular GUI applications in Linux and the terminal commands that power them behind the scenes.",
      date: "2024-04-01",
      author: "Ravi Gupta",
      readTime: "7 min read",
      category: "Linux & Terminal",
      color: "#4CAF50",
      link: "https://medium.com/@ravi9991ct/5-popular-gui-programs-in-linux-and-the-terminal-commands-behind-them-a649ae7cfeed"
    },
    {
      title: "Configuring apache webserver inside docker container in centos 7",
      excerpt: "Step-by-step guide to setting up Apache webserver inside a Docker container running CentOS 7.",
      date: "2024-03-15",
      author: "Ravi Gupta",
      readTime: "6 min read",
      category: "Docker & Linux",
      color: "#FF9800",
      link: "https://medium.com/@ravi9991ct/configuring-apache-webserver-inside-docker-container-in-centos-7-1a333ff2a910"
    },
    {
      title: "Running Graphical Software in Docker Containers",
      excerpt: "Learn how to run GUI-based applications inside Docker containers with practical tips and troubleshooting.",
      date: "2024-03-01",
      author: "Ravi Gupta",
      readTime: "8 min read",
      category: "Docker & GUI",
      color: "#2196F3",
      link: "https://medium.com/@ravi9991ct/running-graphical-software-in-docker-containers-dd651b2ad29d"
    },
    {
      title: "Why Top Companies Use Linux — And the Benefits They Reap",
      excerpt: "A look at why industry leaders choose Linux and the advantages it brings to their operations.",
      date: "2024-02-20",
      author: "Ravi Gupta",
      readTime: "5 min read",
      category: "Linux Insights",
      color: "#607D8B",
      link: "https://medium.com/@ravi9991ct/why-top-companies-use-linux-and-the-benefits-they-reap-27053c4f889e"
    },
    {
      title: "The command working behind the Ctrl+C and Ctrl+Z interrupt signals.",
      excerpt: "Understand the terminal commands and processes behind the Ctrl+C and Ctrl+Z signals in Linux.",
      date: "2024-02-10",
      author: "Ravi Gupta",
      readTime: "4 min read",
      category: "Linux & Terminal",
      color: "#9C27B0",
      link: "https://medium.com/@ravi9991ct/the-command-working-behind-the-ctrl-c-and-ctrl-z-interrupt-signals-412c9ba641c6"
    },
    {
      title: "Git Branching Workflow: Creating, Modifying, and Merging a Feature Branch Without Conflicts",
      excerpt: "A practical guide to creating, modifying, and merging feature branches in Git, with tips to avoid conflicts and streamline your workflow.",
      date: "2024-04-18",
      author: "Ravi Gupta",
      readTime: "8 min read",
      category: "Git & Workflow",
      color: "#F1502F",
      link: "https://medium.com/@ravi9991ct/git-branching-workflow-creating-modifying-and-merging-a-feature-branch-without-conflicts-06941a6e3f2a"
    },
  ];

  const [showAll, setShowAll] = React.useState(false);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
              Tech
            </span>{' '}
            <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
              Blog
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-exo">
            Insights, tutorials, and thoughts on technology and innovation
          </p>
          <p className="text-base text-slate-400 font-exo mt-2">
            (These blogs are also featured projects. Tap any card to read, or tap the button below to open my Medium profile.)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 transform transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:shadow-2xl cursor-pointer relative overflow-hidden"
              onClick={() => {
                if (post.link) {
                  window.open(post.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-cyan-400/20 rounded-full text-xs font-semibold text-cyan-400 mb-4 font-exo">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold text-slate-100 mb-3 font-orbitron transition-colors duration-300 ${
                  post.link 
                    ? 'group-hover:text-cyan-400 cursor-pointer' 
                    : 'group-hover:text-purple-400'
                }`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-300 text-sm leading-relaxed font-exo mb-6">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-exo">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className={`flex items-center gap-2 font-semibold text-sm transition-colors duration-300 font-exo ${
                  post.link 
                    ? 'text-cyan-500 group-hover:text-cyan-400' 
                    : 'text-purple-500 group-hover:text-pink-500'
                }`}>
                  <span>{post.link ? 'Read on Medium' : 'Coming Soon'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Published indicator for real articles */}
                {post.link && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" title="Published Article" />
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-cyan-400" />
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          {!showAll ? (
            <button 
              className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700 font-exo mx-auto"
              style={{ display: 'block' }}
              onClick={() => setShowAll(true)}
            >
              <span className="flex items-center gap-2 justify-center">
                <BookOpen className="w-5 h-5" />
                View All Blogs
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 blur-md -z-10"></div>
            </button>
          ) : (
            <button 
              className="group relative px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-cyan-700 font-exo mx-auto"
              style={{ display: 'block' }}
              onClick={() => setShowAll(false)}
            >
              <span className="flex items-center gap-2 justify-center">
                <BookOpen className="w-5 h-5" />
                Show Less
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 blur-md -z-10"></div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;