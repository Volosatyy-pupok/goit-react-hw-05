import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>We're sorry, but the page you are looking for could not be found.</p>
      <p>
        Please check the URL or go back to the <Link to="/">homepage</Link>.
      </p>
    </>
  );
}
