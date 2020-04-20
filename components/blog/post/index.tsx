import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Post from './style';

import { Container } from '~/public/styles/global';

import WhatsApp from '~/public/images/svg/whatsapp';

import Facebook from '~/public/images/svg/facebook';

import Twitter from '~/public/images/svg/twitter';

import Link from '~/public/images/svg/link';

const cpPost: React.FC = () => {
  const { error, post } = useSelector((state: applicationState) => ({
    error: state.about.error,
    post: state.blogPost.data
  }));

  if (error) return null;

  const [copy, setCopy] = React.useState(false);

  const copyToClipboard = () => {
    let Url: HTMLInputElement = document.getElementById(
      'post-link'
    ) as HTMLInputElement;

    Url.select();

    document.execCommand('Copy');

    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  const urlShare = `https://decorakidsloja.com.br/blog/${post.slug}`;

  return (
    <Container>
      <Post>
        <img
          src={post.acf.image.sizes['blog-thumb']}
          alt={post.acf.image.alt}
          title={post.acf.image.description}
          width={post.acf.image.sizes['blog-thumb-width']}
          height={post.acf.image.sizes['blog-thumb-height']}
        />

        <h1>{post.title.rendered}</h1>

        <h2>{post.acf.subtitle}</h2>

        <div className="author-and-share">
          <span>por {post.acf.author.display_name}</span>

          <div>
            <span>Compartilhe</span>

            <a
              href={`https://api.whatsapp.com/send?1=pt_BR&text=${urlShare}`}
              title="Compartilhe no WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp />
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${urlShare}`}
              title="Compartilhe no Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${urlShare}`}
              title="Compartilhe no Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>

            <button
              title="Copiar Link"
              onClick={() => copyToClipboard()}
              className={copy ? 'copied' : ''}
            >
              <Link />

              <input
                id="post-link"
                className="sr-only"
                defaultValue={urlShare}
              />
            </button>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.acf.description }} />

        <div className="both" />
      </Post>
    </Container>
  );
};

export default cpPost;
