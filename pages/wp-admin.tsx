import React from 'react';

import { URL_API } from '~/utils/config';

const wpAdminPage = () => (
  <>
    <span>redirecionando...</span>
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

wpAdminPage.getInitialProps = async (props: Iprops) => {
  const url = URL_API.replace('/?rest_route=', '/wp-login.php');

  if (props.ctx.res) {
    props.ctx.res.writeHead(302, {
      Location: url
    });

    props.ctx.res.end();
  } else {
    window.location.href = url;
  }
};

export default wpAdminPage;
