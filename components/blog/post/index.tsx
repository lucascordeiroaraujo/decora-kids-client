import React from 'react';

import Post from './style';

import { useRouter } from 'next/router';

import { Container } from '~/public/styles/global';

import WhatsApp from '~/public/images/svg/whatsapp';

import Facebook from '~/public/images/svg/facebook';

import Twitter from '~/public/images/svg/twitter';

import Link from '~/public/images/svg/link';

const cpPost: React.FC = () => {
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

  const router = useRouter();

  console.log(router);

  return (
    <Container>
      <Post>
        <img
          src="https://picsum.photos/480/670"
          alt=""
          title=""
          width="480"
          height="670"
        />

        <h1>Conheça 17 dicas de cuidados com recém-nascidos</h1>

        <h2>Chamada para a matéria com exemplo</h2>

        <div className="author-and-share">
          <span>por Lais Araújo</span>

          <div>
            <span>Compartilhe</span>

            <a
              href="#"
              title="Compartilhe no WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp />
            </a>

            <a
              href="#"
              title="Compartilhe no Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="#"
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
                value="http://localhost:3000/blog/post-name"
              />
            </button>
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. It has survived not only five centuries, but also the leap into
          electronic typesetting
        </p>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. It has survived not only five centuries, but also the leap into
          electronic typesetting
        </p>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <div className="both" />
      </Post>
    </Container>
  );
};

export default cpPost;
