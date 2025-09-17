import { SessionProvider } from "next-auth/react"

type ProvidersProps = {
    Component: React.ComponentType<any>;
    pageProps: { session: any; [key: string]: any };
}
export default function Providers({
  Component,
  pageProps: { session, ...pageProps },
}: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}