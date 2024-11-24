export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Kamflix</h1>
      <div className="prose dark:prose-invert">
        <p>
          Kamflix is your ultimate movie companion, designed to enhance your
          film-watching experience. Our mission is to connect movie enthusiasts
          with the films they love and help them discover new favorites.
        </p>
        <h2>Our Features</h2>
        <ul>
          <li>Comprehensive movie database</li>
          <li>Personalized recommendations</li>
          <li>User reviews and ratings</li>
          <li>Customizable watchlists</li>
          <li>Latest movie news and updates</li>
        </ul>
        <h2>Our Team</h2>
        <p>
          Kamflix is brought to you by a passionate team of film lovers and tech
          enthusiasts. We&apos;re dedicated to creating the best possible
          platform for movie discovery and appreciation.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We&apos;d love to hear from you! Visit our{" "}
          <a href="/contact">Contact Us</a> page to get in touch with our team.
        </p>
      </div>
    </div>
  );
}
