function Navigation({ links }) {
  return (
    <nav className="navigation">
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
