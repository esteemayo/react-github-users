const User = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <ul className="users">
        <li>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url} target="_blank" rel="noreferrer">
              Profile
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default User;
