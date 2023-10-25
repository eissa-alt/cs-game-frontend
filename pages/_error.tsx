const ErrorPage = ({ error }: any) => {
   return <div className="text-white">ErrorPage {error}</div>;
};

ErrorPage.getInitialProps = ({ res, err }: any) => {
   //    console.log(err);
   //    console.log(res);
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
   return { error: statusCode };
};
// ErrorPage.isMiniHeaderFooterLayout = true;

export default ErrorPage;
