import React from 'react';
import '../styles/index.css'; // Reuse global styles

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Building a Portfolio with React and Vite',
            date: '2025-11-24',
            excerpt: 'How I built this portfolio website using modern web technologies.',
            link: '#'
        },
        {
            id: 2,
            title: 'My Experience with .NET 8 Migration',
            date: '2025-10-15',
            excerpt: 'Lessons learned from upgrading legacy systems to .NET 8.',
            link: '#'
        }
    ];

    return (
        <section className="section" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="heading">Blog</h2>
                <div className="blog-list">
                    {posts.map(post => (
                        <div key={post.id} className="blog-post" style={{ marginBottom: '40px' }}>
                            <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '10px' }}>
                                <a href={post.link}>{post.title}</a>
                            </h3>
                            <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '10px' }}>
                                {post.date}
                            </p>
                            <p style={{ color: 'var(--color-text-secondary)' }}>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
