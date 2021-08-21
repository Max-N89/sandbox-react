import React from "react";

function Blog(props) {
    const {posts} = props;

    const sidebar = (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );

    const content = posts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    ));

    return (
        <section>
            {sidebar}
            {content}
        </section>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

export {Blog, posts};
