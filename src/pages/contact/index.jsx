import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //   route.go(1);
      window.location.href = "/";
    }, 5000);
  }, []);
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Contact;
