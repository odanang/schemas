import ProviderNext, { appInitialProps } from "../ui/Provider/Next";

function App({ Component, pageProps }) {
  return (
    <ProviderNext pageProps={pageProps}>
      <Component {...pageProps} />
    </ProviderNext>
  );
}
App.getInitialProps = appInitialProps([]);
export default App;
