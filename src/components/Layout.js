import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Layout({ children, header, socialLinks, pagesTitles, footer}) {
  return (
    <>
      <Header header={header}  socialLinks={socialLinks} pagesTitles={pagesTitles} />
      <main>{children}</main>
      <Footer footer={footer}  socialLinks={socialLinks} pagesTitles={pagesTitles} />
    </>
  );
}
