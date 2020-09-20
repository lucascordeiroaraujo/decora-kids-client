import React from 'react';

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
  if (props.ctx.res) {
    props.ctx.res.writeHead(302, {
      Location: 'http://decorakids-com-br.umbler.net/wp-login.php'
    });

    props.ctx.res.end();
  } else {
    window.location.href = 'http://decorakids-com-br.umbler.net/wp-login.php';
  }
};

export default wpAdminPage;
