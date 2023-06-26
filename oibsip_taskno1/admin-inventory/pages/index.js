import { useEffect } from "react";
import { useRouter } from "next/router";

const LandingPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dough");
  }, []);
  return (
    <div>
      <h1>Landing Page</h1>
      <h2>Get started</h2>
    </div>
  );
};

export default LandingPage;
