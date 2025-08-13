import Guest from "../components/Guest";

export default function HomePage() {
  // Always guest content on home, even if signed in
  return <Guest />;
}
