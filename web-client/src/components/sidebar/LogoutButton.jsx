import useLogout from "../../hooks/useLogout"


const LogoutButton = () => {
  const {loading, logout} = useLogout();

  return (
    <div className="mt-auto">
      <button onClick={logout}>LogoutButton</button>
    </div>
  )
}

export default LogoutButton
