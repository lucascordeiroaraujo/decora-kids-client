import React from 'react';

import Description from './style';

import { Container } from '~/public/styles/global';

import InternalTitle from '~/components/global/internalTitle';

import Fade from 'react-reveal/Fade';

const cpDescription: React.FC = () => (
  <Description>
    <InternalTitle title="Quem Somos?" />

    <Container>
      <Fade>
        <img
          src="https://picsum.photos/440/440"
          alt=""
          title=""
          width="440"
          height="440"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          urna non sem finibus, vitae faucibus risus pulvinar. Quisque auctor
          felis fringilla elit finibus, et ornare purus venenatis. Aliquam
          elementum eros id turpis finibus pretium. In eget pretium nisl, quis
          gravida massa. Praesent nec ornare risus. Sed laoreet ipsum vel est
          blandit, in laoreet enim cursus. Vestibulum venenatis sollicitudin
          elementum.{' '}
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          urna non sem finibus, vitae faucibus risus pulvinar. Quisque auctor
          felis fringilla elit finibus, et ornare purus venenatis.
        </p>

        <img
          src="https://picsum.photos/440/440"
          alt=""
          title=""
          width="440"
          height="440"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          urna non sem finibus, vitae faucibus risus pulvinar. Quisque auctor
          felis fringilla elit finibus, et ornare purus venenatis. Aliquam
          elementum eros id turpis finibus pretium. In eget pretium nisl, quis
          gravida massa. Praesent nec ornare risus. Sed laoreet ipsum vel est
          blandit, in laoreet enim cursus.{' '}
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          urna non sem finibus, vitae faucibus risus pulvinar. Quisque auctor
          felis fringilla elit finibus, et ornare purus venenatis.
        </p>
      </Fade>
    </Container>
  </Description>
);

export default cpDescription;
